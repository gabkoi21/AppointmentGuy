import { create } from "zustand";
import api from "@/api/axios";
import useAuthStore from "@/stores/authStore";

const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  error: null,
  token: null,

  // Fetches all users from the server and updates local state
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const token = useAuthStore.getState().token;
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

  // Updates a specific user's information on the server and in local state
  updateUser: async (userId, userData) => {
    set({ loading: true, error: null });
    try {
      const token = useAuthStore.getState().token;
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
      throw error;
    }
  },

  //  Deletes a user by ID from the server and updates the local user list
  deleteUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const token = useAuthStore.getState().token;
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

  //  Toggles the status (e.g., active/inactive) of a specific user
  updateUserStatus: async (id) => {
    try {
      const token = useAuthStore.getState().token;
      if (!token) {
        console.error("No token found in Zustand store.");
        return;
      }

      const res = await api.patch(
        `/auth/users/${id}/toggle-status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Status toggled:", res.data);
    } catch (error) {
      console.error("Failed to toggle status:", error);
    }
  },
}));

export default useUserStore;
