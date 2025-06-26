import { create } from "zustand";
import api from "@/api/axios";

const useAppointmentStore = create((set, get) => ({
  appointments: [],
  loading: false,
  error: null,

  CreateAppointment: async (appointmentData) => {
    set({ loading: true, error: null });
    try {
      console.log("Creating appointment with data:", appointmentData);

      const response = await api.post("/appointment/", appointmentData);

      console.log("Appointment created successfully:", response.data);

      set((state) => ({
        appointments: [...state.appointments, response.data],
        loading: false,
        error: null,
      }));

      return response.data;
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
      const token = localStorage.getItem("token");

      if (!token) {
        console.warn("No token found. Aborting fetchUser.");
        set({ loading: false, error: "Authentication token missing." });
        return;
      }

      const response = await api.get("/appointment/getall");
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

  updateAppointmentStatus: async (id, newStatus) => {
    console.log(`Store: Updating appointment ${id} to status: ${newStatus}`);

    set({ loading: true, error: null });

    try {
      const response = await api.patch(
        `/business/appointments/${id}/update-status`,
        { status: newStatus }
      );

      const updatedStatus = response.data.new_status;

      // Update the status in the local store so UI re-renders
      set((state) => ({
        appointments: state.appointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: updatedStatus }
            : appointment
        ),
        loading: false,
        error: null,
      }));
      return response.data;
    } catch (error) {
      console.error(`Error updating appointment ${id}:`, error);

      const errorMessage =
        error?.response?.data?.message ||
        error?.response?.statusText ||
        error.message ||
        "Failed to update appointment status";

      set({
        error: errorMessage,
        loading: false,
      });
      throw error;
    }
  },
}));

export default useAppointmentStore;
