import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/api/axios";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user,
      token,
      refreshToken,
      loading,
      error,

      login) => {
        set({ loading, error);

        try {
          console.log("Sending login request with credentials, credentials);
          const response = await api.post("/auth/login", credentials);
          console.log("Login response, response.data);

          const { access_token, refresh_token, user_type } = response.data;

          // Store tokens in localStorage
          localStorage.setItem("token", access_token);
          localStorage.setItem("refresh_token", refresh_token);

          set({
            user,
            token,
            refreshToken,
            loading,
          });

          return user_type;
        } catch (error) {
          console.error("Login error, error);
          set({
            error,
            loading,
          });

          return null;
        }
      },

      register) => {
        set({ loading, error);

        try {
          await api.post("/auth/register", userData);
          set({ loading);
          return true;
        } catch (error) {
          set({
            error,
            loading,
          });
          return false;
        }
      },

      logout) => {
        set({ user, token, refreshToken, error);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
      },
    }),
    {
      name,
      getStorage) => localStorage,
    },
  ),
);

export default useAuthStore;
