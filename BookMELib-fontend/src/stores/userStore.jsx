import { create } from "zustand";
import api from "@/api/axios";

const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get("/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ users: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load users";
      console.error("Error fetching users:", error);
      set({ error: errorMessage, loading: false });
    }
  },

  updateUser: async (userId, userData) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.put(`/auth/users/${userId}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update the user in the local state
      set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? { ...user, ...userData } : user
        ),
        loading: false,
      }));

      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update user";
      console.error("Error updating user:", error);
      set({ error: errorMessage, loading: false });
      throw error; // Rethrow to handle in component
    }
  },

  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("accessToken");
      await api.delete(`/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set((state) => ({
        users: state.users.filter((user) => user.id !== id),
        loading: false,
      }));
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete user";
      console.error("Error deleting user:", error);
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },
}));
export default useUserStore;
