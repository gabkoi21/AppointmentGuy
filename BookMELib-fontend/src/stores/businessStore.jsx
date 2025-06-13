import { create } from "zustand";
import api from "@/api/axios";

const useBusinessStore = create((set, get) => ({
  businesses: [],
  currentBusiness: null,
  token: null,
  loading: false,
  error: null,

  registerBusiness: async (businessData) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      const response = await api.post("/business/create", businessData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ businesses: [...get().businesses, response.data], loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to register business";
      set({ error: errorMessage, loading: false });
    }
  },

  fetchBusinesses: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/business/");
      set({ businesses: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load businesses";
      set({ error: errorMessage, loading: false });
    }
  },

  getBusinessById: async (id) => {
    set({ loading: true, error: null, currentBusiness: null });
    try {
      if (!id) {
        throw new Error("Business ID is required");
      }
      const response = await api.get(`/business/${id}`);
      set((state) => ({
        currentBusiness: response.data,
        businesses: state.businesses.some((b) => b.id === response.data.id)
          ? state.businesses
          : [...state.businesses, response.data],
        loading: false,
      }));
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        `Failed to load business with ID ${id}`;
      set({ error: errorMessage, loading: false });
      return null;
    }
  },

  deleteBusiness: async (id) => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/business/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set((state) => ({
        businesses: state.businesses.filter((business) => business.id !== id),
        loading: false,
      }));
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete business";
      set({ error: errorMessage, loading: false });
    }
  },

  getBusinessByAdmid: async () => {
    set({ loading: true, error: null });

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      const response = await api.get(`/business/my-business`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ currentBusiness: response.data, loading: false });
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || `Failed to load business`;
      console.error("Business load error:", errorMessage);
      set({ error: errorMessage, loading: false });
      return null;
    }
  },
}));

export default useBusinessStore;
