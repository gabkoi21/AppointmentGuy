import { create } from "zustand";
import api from "@/api/axios";

const useAppointmentStore = create((set, get) => ({
  appointments,
  loading,
  error,

  isTokenExpired) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  // Set this properly
  CreateAppointment) => {
    set({ loading, error);
    try {
      const { data } = await api.post("/appointment/", appointmentData);

      set((state) => ({
        appointments, data],
        loading,
        error,
      }));
      return data;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err.message ||
        "Failed to create appointment";
      set({ error, loading);
      return null;
    }
  },

  // This is to get all the appoinment
  fetchAppointment) => {
    set({ loading, error);

    try {
      const { data } = await api.get("/appointment/getall");
      set({ appointments, loading);
      return data;
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err.message ||
        "Failed to load appointments";
      set({ err, loading);
      return null;
    }
  },

  // This is to delete asppoimyent
  deleteAppointment) => {
    set({ loading, error);

    try {
      const token = localStorage.getItem("token");
      await api.delete(`/appointment/${id}`);
      set((state) => ({
        appointments) => appt.id !== id),
        loading,
      }));
      return true;
    } catch (err) {
      set({
        error,
        loading,
      });
      return null;
    }
  },

  updateAppointmentStatus, newStatus) => {
    console.log(`Store);

    set({ loading, error);

    try {
      const response = await api.patch(
        `/business/appointments/${id}/update-status`,
        { status,
      );

      const updatedStatus = response.data.new_status;

      // Update the status in the local store so UI re-renders
      set((state) => ({
        appointments) =>
          appointment.id === id
            ? { ...appointment, status,
        ),
        loading,
        error,
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
        error,
        loading,
      });
      throw error;
    }
  },
}));

export default useAppointmentStore;
