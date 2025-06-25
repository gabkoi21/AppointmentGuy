// This is to save

import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/api/axios";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      loading: false,
      error: null,

      // LOGIN
      login: async (credentials) => {
        set({ loading: true, error: null });

        try {
          const { data } = await api.post("/auth/login", credentials);
          const { access_token, refresh_token, user_type, business_id } = data;

          set({
            user: { user_type, business_id },
            token: access_token,
            refreshToken: refresh_token,
            loading: false,
          });

          return user_type;
        } catch (error) {
          console.error("Login error:", error);
          set({
            error: error?.response?.data?.message || "Login failed.",
            loading: false,
          });
          return null;
        }
      },

      // REGISTER
      register: async (userData) => {
        set({ loading: true, error: null });

        try {
          await api.post("/auth/register", userData);
          set({ loading: false });
          return true;
        } catch (error) {
          set({
            error: error?.response?.data?.message || "Registration failed.",
            loading: false,
          });
          return false;
        }
      },

      // LOGOUT
      logout: () => {
        set({ user: null, token: null, refreshToken: null, error: null });
      },

      // GETTERS
      getAccessToken: () => get().token,
      getRefreshToken: () => get().refreshToken,
      getUserData: () => get().user,
      isAuthenticated: () => !!get().token,

      // SETTERS
      setToken: (accessToken) => {
        set({ token: accessToken, error: null });
      },
      updateUserData: (userData) =>
        set({ user: { ...get().user, ...userData } }),

      // TOKEN EXPIRY CHECK
      isTokenExpiringSoon: () => {
        const token = get().token;
        if (!token) return true;

        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          const exp = payload.exp * 1000;
          const now = Date.now();
          return exp - now < 5 * 60 * 1000;
        } catch {
          return true;
        }
      },

      // CLEAR ERROR
      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
      }),
    }
  )
);

// export default useAuthStore;

// The main line that saves the token in Zustand is:

set({ token: access_token });

import axios from "axios";
import useAuthStore from "@/stores/authStore";

// This is the Application entry
const api = axios.create({
  baseURL: " http://192.168.140.150:5000",
  timeout: 10000,
});

let isRefreshing = false;
let failedQueue = [];

//
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    error ? prom.reject(error) : prom.resolve(token);
  });
  failedQueue = [];
};

//
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return api(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = useAuthStore.getState().getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token available");

        const res = await axios.post(
          "http://192.168.140.150:5000/auth/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
              "Content-Type": "application/json",
            },
            timeout: 5000,
          }
        );

        const newToken = res.data.access_token;
        useAuthStore.getState().setToken(newToken);
        processQueue(null, newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        useAuthStore.getState().logout();
        if (!["/login", "/"].includes(window.location.pathname)) {
          window.location.href = "/";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
