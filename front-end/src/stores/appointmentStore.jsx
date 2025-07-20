import { create } from "zustand";
import api from "@/api/axios";

const useAppointmentStore = create((set, get) => ({
  appointments: [],
  loading: false,
  error: null,

  isTokenExpired: (token) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  // Set this properly
  CreateAppointment: async (appointmentData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post("/appointment/", appointmentData);

      set((state) => ({
        appointments: [...state.appointments, data],
        loading: false,
        error: null,
      }));
      return data;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err.message ||
        "Failed to create appointment";
      set({ error: errorMessage, loading: false });
      return null;
    }
  },

  // This is to get all the appoinment
  fetchAppointment: async () => {
    set({ loading: true, error: null });

    try {
      const { data } = await api.get("/appointment/getall");
      set({ appointments: data, loading: false });
      return data;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err.message ||
        "Failed to load appointments";
      set({ err: errorMessage, loading: false });
      return null;
    }
  },

  // This is to delete asppoimyent
  deleteAppointment: async (id) => {
    set({ loading: true, error: null });

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/appointment/${id}`);
      set((state) => ({
        appointments: state.appointments.filter((appt) => appt.id !== id),
        loading: false,
      }));
      return true;
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          err.message ||
          "Failed to delete appointment",
        loading: false,
      });
      return null;
    }
  },

  updateAppointmentStatus: async (id, newStatus) => {
    console.log(`Store: Updating appointment ${id} to status: ${newStatus}`);

    set({ loading: true, error: null });

    try {
      const response = await api.patch(
        `/business/appointments/${id}/update-status`,
        { status: newStatus },
      );

      const updatedStatus = response.data.new_status;

      // Update the status in the local store so UI re-renders
      set((state) => ({
        appointments: state.appointments.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: updatedStatus }
            : appointment,
        ),
        loading: false,
        error: null,
      }));
      return response.data;
    } catch (error) {
      // console.error(`Error updating appointment ${id}:`, error);
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
