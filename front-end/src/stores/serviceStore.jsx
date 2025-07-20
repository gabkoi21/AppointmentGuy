import { create } from "zustand";
import api from "@/api/axios";

const useServiceStore = create((set) => ({
  services,
  loading,
  error,
  fetchServices) => {
    set({ loading, error);
    try {
      const response = await api.get("/services/");
      set({ services, loading);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load services";
      set({ error, loading);
    }
  },
}));

export default useServiceStore;
