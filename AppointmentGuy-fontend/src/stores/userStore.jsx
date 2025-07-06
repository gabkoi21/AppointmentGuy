import { create } from "zustand";
import api from "@/api/axios";
import { jwtDecode } from "jwt-decode";

const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  error: null,

  // Check if token is expired
  isTokenExpired: (token) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  //  Cleaned-up fetchUser — no refresh, just call API
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/auth/users");
      set({ users: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load users";
      set({ error: errorMessage, loading: false });
    }
  },

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

      // Return the updated user data for potential further use
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update user";
      console.error("Error updating user:", error);
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },

  // Delete a user
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

  //  Toggle user active/inactive
  updateUserStatus: async (id) => {
    try {
      const res = await api.patch(`/auth/users/${id}/toggle-status`);
      set((state) => ({
        users: state.users.map((user) =>
          user.id === id ? { ...user, ...res.data } : user
        ),
      }));
      console.log("Status toggled:", res.data);
    } catch (error) {
      console.error("Failed to toggle status:", error);
      set({ error: "Failed to toggle user status." });
    }
  },
}));

export default useUserStore;
