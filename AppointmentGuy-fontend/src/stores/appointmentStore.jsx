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

  // Enhanced updateAppointmentStatus function for your store
  // Fixed updateAppointmentStatus function for your store
  updateAppointmentStatus: async (id, newStatus) => {
    console.log(`Store: Updating appointment ${id} to status: ${newStatus}`);

    set({ loading: true, error: null });

    try {
      // Get current token from localStorage (same as other functions)
      const token = localStorage.getItem("accessToken");

      const response = await api.patch(
        `/business/appointments/${id}/update-status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(`API Response:`, response.data);

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

      // Re-throw the error so the component can handle it
      throw error;
    }
  },
}));

export default useAppointmentStore;
