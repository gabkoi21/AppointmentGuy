import { create } from "zustand";
import api from "@/api/axios";

const useServiceStore = create((set) => ({
  services: [],
  loading: false,
  error: null,
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
}));

export default useServiceStore;
