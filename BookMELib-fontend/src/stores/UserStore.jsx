import { create } from "zustand";
import api from "@/api/axios";

import useAuthStore from "@/stores/authStore";

const useUserStore = create((set) => ({
  users: [],
  currentUser: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    const token =
      useAuthStore.getState().token || localStorage.getItem("token");

    set({ loading: true, error: null });

    try {
      const response = await api.get("/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetched Users:", response.data);

      set({
        users: response.data,
        loading: false,
      });

      return true;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load users";

      set({ error: errorMessage, loading: false });
    }
  },
}));

export default useUserStore;
