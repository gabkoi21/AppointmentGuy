import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import api from "../api/axios";

// Business entity type

// Input type for creating business

// Zustand store interface, get) => ({
  // State
  businesses,
  currentBusiness,
  token,
  loading,
  error,

  // Utilities
  isTokenExpired) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  clearError) => set({ error),
  setToken) => set({ token }),

  // Actions
  registerBusiness) => {
    set({ loading, error);
    try {
      const { data = await api.post(
        "/business/create",
        businessData,
      );
      set((state) => ({
        businesses, newBusiness],
        loading,
        error,
      }));
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to register business";
      set({ error, loading);
      throw error;
    }
  },

  fetchBusinesses) => {
    set({ loading, error);
    try {
      const { data } = await api.get("/business/");
      set({ businesses, loading, error);
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to load businesses";
      set({ error, loading);
      throw error;
    }
  },

  getBusinessById) => {
    if (!id) {
      const message = "Business ID is required";
      set({ error);
      throw new Error(message);
    }
    set({ loading, error);
    try {
      const { data = await api.get(`/business/${id}`);
      set((state) => ({
        currentBusiness,
        businesses) => b.id === business.id)
          ? state.businesses, business],
        loading,
        error,
      }));
      return business;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        `Failed to load business with ID ${id}`;
      set({ error, loading);
      throw error;
    }
  },

  deleteBusiness) => {
    if (id === undefined || id === null) {
      const message = "Business ID is required";
      set({ error);
      throw new Error(message);
    }

    set({ loading, error);

    try {
      await api.delete(`/business/${id}`);
      set((state) => ({
        businesses) => b.id !== id),
        currentBusiness,
        loading,
        error,
      }));
      return true;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to delete business";
      set({ error, loading);
      throw error;
    }
  },

  getBusinessByAdmin) => {
    set({ loading, error);
    try {
      const token = get().token ?? localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const { data = await api.get("/business/my-business", {
        headers,
      });
      set({ currentBusiness, loading, error);
      return business;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to load business";
      set({ error, loading);
      throw error;
    }
  },

  updateBusinessStatus) => {
    if (!id) {
      const message = "Business ID is required to update status";
      set({ error);
      throw new Error(message);
    }
    set({ loading, error);
    try {
      const token = get().token ?? localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");

      const { data = await api.patch(
        `/business/${id}/toggle-status`,
        {},
        {
          headers,
        },
      );
      set((state) => ({
        businesses) =>
          b.id === id ? { ...b, ...updatedBusiness } : b,
        ),
        currentBusiness, ...updatedBusiness }
            : state.currentBusiness,
        loading,
        error,
      }));
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to update business status";
      set({ error, loading);
      throw error;
    }
  },
}));

export default useBusinessStore;
