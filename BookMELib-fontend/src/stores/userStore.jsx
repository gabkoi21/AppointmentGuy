import { create } from "zustand";
import api from "@/api/axios";

const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ users: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load users";
      set({ error: errorMessage, loading: false });
    }
  },

  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/auth/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update users in state
      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
        loading: false,
      }));
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete user";
      set({ error: errorMessage, loading: false });
    }
  },
}));
export default useUserStore;
