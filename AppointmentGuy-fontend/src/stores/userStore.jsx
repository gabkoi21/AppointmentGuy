import { create } from "zustand";
import api from "@/api/axios";

const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  error: null,

  // Fetches all users and logs the token
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      console.log("Token in fetchUser:", token);

      if (!token) {
        console.warn("No token found. Aborting fetchUser.");
        set({ loading: false, error: "Authentication token missing." });
        return;
      }

      const response = await api.get("/auth/users");
      set({ users: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load users";
      console.error("Error fetching users:", error);
      set({ error: errorMessage, loading: false });
    }
  },

  // Update a user by ID
  updateUser: async (userId, userData) => {
    set({ loading: true, error: null });
    try {
      const response = await api.put(`/auth/users/${userId}`, userData);
      set((state) => ({
        users: state.users.map((user) =>
          user.id === userId ? { ...user, ...response.data } : user
        ),
        loading: false,
      }));
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update user";
      console.error("Error updating user:", error);
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },

  // ✅ Delete a user by ID
  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/auth/users/${id}`);
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

  // ✅ Toggle a user’s active/inactive status
  updateUserStatus: async (id) => {
    try {
      const res = await api.patch(`/auth/users/${id}/toggle-status`);
      console.log("Status toggled:", res.data);
    } catch (error) {
      console.error("Failed to toggle status:", error);
      set({ error: "Failed to toggle user status." });
    }
  },
}));

export default useUserStore;
