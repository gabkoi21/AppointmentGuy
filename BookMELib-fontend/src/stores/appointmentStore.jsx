import { create } from "zustand";
import api from "@/api/axios";

const useAppointmentStore = create((set) => ({
  appointments: [],
  loading: false,
  error: null,
  fetchAppointment: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/appointment/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ appointments: response.data, loading: false });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load appointments";
      set({ error: errorMessage, loading: false });
    }
  },
}));
export default useAppointmentStore;
