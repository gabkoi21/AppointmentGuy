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

      login: async (credentials) => {
        set({ loading: true, error: null });

        try {
          const response = await api.post("/auth/login", credentials);
          const { access_token, refresh_token, user_type } = response.data;

          localStorage.setItem("token", access_token);
          localStorage.setItem("refresh_token", refresh_token);

          set({
            user: { user_type },
            token: access_token,
            refreshToken: refresh_token,
            loading: false,
          });

          return user_type;
        } catch (error) {
          console.error("Login error:", error);
          set({
            error:
              error?.response?.data?.message ||
              error.message ||
              "Login failed.",
            loading: false,
          });

          return null;
        }
      },

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

      logout: () => {
        set({ user: null, token: null, refreshToken: null, error: null });

        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
      },
    }),
    {
      name: "auth-storage", // localStorage key
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
