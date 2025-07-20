import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import api from "../api/axios";

// Business entity type
interface Business {
  id: number;
  name: string;
  status: string;
  description?: string;
}

// Input type for creating business
interface BusinessCreateInput {
  name: string;
  status: string;
  description?: string;
}

// Zustand store interface: state + actions
interface BusinessStore {
  businesses: Business[];
  currentBusiness: Business | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  isTokenExpired: (token: string | null) => boolean;
  clearError: () => void;
  setToken: (token: string | null) => void;

  registerBusiness: (businessData: BusinessCreateInput) => Promise<void>;
  fetchBusinesses: () => Promise<void>;
  getBusinessById: (id: string) => Promise<Business>;
  deleteBusiness: (id: number) => Promise<boolean>;
  getBusinessByAdmin: () => Promise<Business>;
  updateBusinessStatus: (id: number) => Promise<void>;
}

const useBusinessStore = create<BusinessStore>((set, get) => ({
  // State
  businesses: [],
  currentBusiness: null,
  token: null,
  loading: false,
  error: null,

  // Utilities
  isTokenExpired: (token) => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  clearError: () => set({ error: null }),
  setToken: (token) => set({ token }),

  // Actions
  registerBusiness: async (businessData) => {
    set({ loading: true, error: null });
    try {
      const { data: newBusiness } = await api.post(
        "/business/create",
        businessData,
      );
      set((state) => ({
        businesses: [...state.businesses, newBusiness],
        loading: false,
        error: null,
      }));
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to register business";
      set({ error: message, loading: false });
      throw error;
    }
  },

  fetchBusinesses: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.get<Business[]>("/business/");
      set({ businesses: data ?? [], loading: false, error: null });
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to load businesses";
      set({ error: message, loading: false });
      throw error;
    }
  },

  getBusinessById: async (id) => {
    if (!id) {
      const message = "Business ID is required";
      set({ error: message });
      throw new Error(message);
    }
    set({ loading: true, error: null });
    try {
      const { data: business } = await api.get<Business>(`/business/${id}`);
      set((state) => ({
        currentBusiness: business,
        businesses: state.businesses.some((b) => b.id === business.id)
          ? state.businesses
          : [...state.businesses, business],
        loading: false,
        error: null,
      }));
      return business;
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        `Failed to load business with ID ${id}`;
      set({ error: message, loading: false });
      throw error;
    }
  },

  deleteBusiness: async (id: number) => {
    if (id === undefined || id === null) {
      const message = "Business ID is required";
      set({ error: message });
      throw new Error(message);
    }

    set({ loading: true, error: null });

    try {
      await api.delete(`/business/${id}`);
      set((state) => ({
        businesses: state.businesses.filter((b) => b.id !== id),
        currentBusiness:
          state.currentBusiness?.id === id ? null : state.currentBusiness,
        loading: false,
        error: null,
      }));
      return true;
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to delete business";
      set({ error: message, loading: false });
      throw error;
    }
  },

  getBusinessByAdmin: async () => {
    set({ loading: true, error: null });
    try {
      const token = get().token ?? localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");
      const { data: business } = await api.get("/business/my-business", {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ currentBusiness: business, loading: false, error: null });
      return business;
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to load business";
      set({ error: message, loading: false });
      throw error;
    }
  },

  updateBusinessStatus: async (id: number) => {
    if (!id) {
      const message = "Business ID is required to update status";
      set({ error: message });
      throw new Error(message);
    }
    set({ loading: true, error: null });
    try {
      const token = get().token ?? localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");

      const { data: updatedBusiness } = await api.patch(
        `/business/${id}/toggle-status`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      set((state) => ({
        businesses: state.businesses.map((b) =>
          b.id === id ? { ...b, ...updatedBusiness } : b,
        ),
        currentBusiness:
          state.currentBusiness?.id === id
            ? { ...state.currentBusiness, ...updatedBusiness }
            : state.currentBusiness,
        loading: false,
        error: null,
      }));
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to update business status";
      set({ error: message, loading: false });
      throw error;
    }
  },
}));

export default useBusinessStore;
