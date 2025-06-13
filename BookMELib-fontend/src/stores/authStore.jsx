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

      // This is the login logic
      login: async (credentials) => {
        set({ loading: true, error: null });

        try {
          const { data } = await api.post("/auth/login", credentials);
          const { access_token, refresh_token, user_type, user } = data; // Get user data from response

          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("refreshToken", refresh_token);

          // Store the full user object, not just user_type
          const userData = user || { user_type }; // Use full user object if available

          set({
            user: userData,
            token: access_token,
            refreshToken: refresh_token,
            loading: false,
          });
          return user_type;
        } catch (error) {
          set({
            error: error?.response?.data?.message || "Login failed.",
            loading: false,
          });
          return null;
        }
      },

      // This is the registration logic
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

      // This is the logout logic
      logout: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("auth-storage");

        set({ user: null, token: null, refreshToken: null });
      },

      getAccessToken: () => localStorage.getItem("accessToken") || get().token,
      getRefreshToken: () =>
        localStorage.getItem("refreshToken") || get().refreshToken,
      setToken: (token) => {
        localStorage.setItem("accessToken", token);
        set({ token });
      },
      setRefreshToken: (refreshToken) => {
        localStorage.setItem("refreshToken", refreshToken);
        set({ refreshToken });
      },

      updateUserData: (userData) =>
        set({ user: { ...get().user, ...userData } }),
      getUserData: () => get().user,
      isAuthenticated: () => !!get().token,
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

export default useAuthStore;
