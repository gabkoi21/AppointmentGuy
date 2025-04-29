import { create } from "zustand";
import api from "@/api/axios";

const useAppointment = create((set, get) => ({
  appointments: [],
  currentAppointment: null,
  loading: false,
  error: null,
  token: null,

  setToken: (token) => set({ token }),

  fetchAppointment: async () => {
    set({ loading: true, error: null });

    try {
      const { token } = get();
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

export default useAppointment;
