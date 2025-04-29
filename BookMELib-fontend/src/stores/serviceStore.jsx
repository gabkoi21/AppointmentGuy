import { create } from "zustand";
import api from "@/api/axios";

const useServiceStore = create((set, get) => ({
  services: [],
  currentService: null,
  loading: false,
  error: null,

  // Fetch all services
  fetchServices: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/services/");
      set({ services: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load services";
      set({ error: errorMessage, loading: false });
    }
  },

  // Get service by ID
  getServiceById: async (id) => {
    set({ loading: true, error: null, currentService: null });
    try {
      const response = await api.get(`/service/${id}`);
      set({ currentService: response.data, loading: false });
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        `Failed to load service with ID ${id}`;
      set({ error: errorMessage, loading: false });
      return null;
    }
  },
}));

export default useServiceStore;
