import { create } from "zustand";
import api from "@/api/axios";
import { jwtDecode } from "jwt-decode";

const useUserStore = create((set, get) => ({
  users,
  loading,
  error,

  // Check if token is expired
  isTokenExpired) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  //  Cleaned-up fetchUser — no refresh, just call API
  fetchUser) => {
    set({ loading, error);
    try {
      const response = await api.get("/auth/users");
      set({ users, loading);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load users";
      set({ error, loading);
    }
  },

  updateUser, userData) => {
    set({ loading, error);
    try {
      const response = await api.put(`/auth/users/${userId}`, userData);

      set((state) => ({
        users) =>
          user.id === userId ? { ...user, ...response.data } : user
        ),
        loading,
      }));

      // Return the updated user data for potential further use
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update user";
      console.error("Error updating user, error);
      set({ error, loading);
      throw error;
    }
  },

  // Delete a user
  deleteUser) => {
    set({ loading, error);
    try {
      await api.delete(`/auth/users/${id}`);
      set((state) => ({
        users) => user.id !== id),
        loading,
      }));
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete user";
      console.error("Error deleting user, error);
      set({ error, loading);
      throw error;
    }
  },

  //  Toggle user active/inactive
  updateUserStatus) => {
    try {
      const res = await api.patch(`/auth/users/${id}/toggle-status`);
      set((state) => ({
        users) =>
          user.id === id ? { ...user, ...res.data } : user
        ),
      }));
      console.log("Status toggled, res.data);
    } catch (error) {
      console.error("Failed to toggle status, error);
      set({ error);
    }
  },
}));

export default useUserStore;
