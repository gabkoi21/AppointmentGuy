import { create } from "zustand";
import api from "@/api/axios";

const useAppointmentStore = create((set, get) => ({
  appointments: [],
  loading: false,
  error: null,

  CreateAppointment: async (appointmentData) => {
    set({ loading: true, error: null });
    try {
      // Get token from localStorage (use accessToken, not token)
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No authentication token found");
      }

      console.log("Creating appointment with data:", appointmentData);
      console.log("Using token:", token);

      const response = await api.post("/appointment/", appointmentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Appointment created successfully:", response.data);

      // Add the new appointment to the existing appointments array
      set((state) => ({
        appointments: [...state.appointments, response.data],
        loading: false,
        error: null,
      }));

      return response.data; // Return the created appointment
    } catch (error) {
      console.error("Error creating appointment:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Failed to create appointment";
      set({ error: errorMessage, loading: false });
      return null; // Return null on error
    }
  },

  fetchAppointment: async () => {
    set({ loading: true, error: null });
    try {
      // Use accessToken instead of token
      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await api.get("/appointment/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ appointments: response.data, loading: false });
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error.message ||
        "Failed to load appointments";
      set({ error: errorMessage, loading: false });
      return null;
    }
  },
}));

export default useAppointmentStore;
