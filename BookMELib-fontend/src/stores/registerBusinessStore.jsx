import { create } from "zustand";
import api from "@/api/axios";
import { persist } from "zustand/middleware";

const useRegisterBusinessStore = create(
  persist(
    (set) => ({
      businessadmin: null,
      token: null,
      loading: false,
      error: null,

      registerBusinessAdmin: async (adminData, token) => {
        set({ loading: true, error: null });
        try {
          const res = await api.post("/business/create", adminData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const { businessadmin, token: newToken } = res.data;
          set({ businessadmin, token: newToken, loading: false, error: null });
          return true;
        } catch (error) {
          const errorMessage =
            error?.response?.data?.message || "Registration failed. Try again.";
          set({ error: errorMessage, loading: false });
          return false;
        }
      },
    }),
    {
      name: "register-business-store",
      getStorage: () => localStorage,
    }
  )
);

export default useRegisterBusinessStore;
