function handleUser({ user_type }: { user_type: string }) {
    // ...
  }
  


  import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import api from "../api/axios";

// Types
interface Business {
  id: string;
  name: string;
  status: string;
  description?: string;
  // Add other business properties as needed
}

interface BusinessCreateInput {
  name: string;
  status: string;
  description?: string;
}

interface BusinessStore {
  businesses: Business[];
  currentBusiness: Business | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isTokenExpired: (token: string | null) => boolean;
  registerBusiness: (businessData: BusinessCreateInput) => Promise<void>;
  fetchBusinesses: () => Promise<void>;
  getBusinessById: (id: string) => Promise<Business | null>;
  deleteBusiness: (id: string) => Promise<boolean>;
  getBusinessByAdmid: () => Promise<Business | null>;
  updateBusinessStatus: (id: string) => Promise<void>;
  clearError: () => void;
  setToken: (token: string | null) => void;
}

const useBusinessStore = create<BusinessStore>((set, get) => ({
  // Initial state
  businesses: [],
  currentBusiness: null,
  token: null,
  loading: false,
  error: null,

  // Utility functions
  isTokenExpired: (token: string | null): boolean => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  },

  // Actions
  clearError: () => set({ error: null }),

  setToken: (token: string | null) => set({ token }),

  registerBusiness: async (businessData: BusinessCreateInput) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/business/create", businessData);
      const newBusiness = response.data;
      
      set((state) => ({
        businesses: [...state.businesses, newBusiness],
        loading: false,
        error: null
      }));
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to register business";
      set({ error: errorMessage, loading: false });
      throw error; // Re-throw for component handling
    }
  },

  fetchBusinesses: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/business/");
      set({ 
        businesses: response.data || [], 
        loading: false,
        error: null 
      });
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load businesses";
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },

  getBusinessById: async (id: string) => {
    if (!id) {
      const errorMessage = "Business ID is required";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    }

    set({ loading: true, error: null });
    try {
      const response = await api.get(`/business/${id}`);
      const business = response.data;
      
      set((state) => ({
        currentBusiness: business,
        businesses: state.businesses.some((b) => b.id === business.id)
          ? state.businesses
          : [...state.businesses, business],
        loading: false,
        error: null
      }));
      
      return business;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        `Failed to load business with ID ${id}`;
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },

  deleteBusiness: async (id: string) => {
    if (!id) {
      const errorMessage = "Business ID is required";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    }

    set({ loading: true, error: null });
    try {
      await api.delete(`/business/${id}`);
      
      set((state) => ({
        businesses: state.businesses.filter((business) => business.id !== id),
        currentBusiness: state.currentBusiness?.id === id ? null : state.currentBusiness,
        loading: false,
        error: null
      }));
      
      return true;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete business";
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },

  getBusinessByAdmid: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await api.get(`/business/my-business`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      const business = response.data;
      set({ 
        currentBusiness: business, 
        loading: false,
        error: null 
      });
      
      return business;
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load business";
      console.error("Business load error:", errorMessage);
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },

  updateBusinessStatus: async (id: string) => {
    if (!id) {
      const errorMessage = "Business ID is required to update status";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    }

    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await api.patch(
        `/business/${id}/toggle-status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      
      const updatedBusiness = response.data;
      
      set((state) => ({
        businesses: state.businesses.map((business) =>
          business.id === id ? { ...business, ...updatedBusiness } : business,
        ),
        currentBusiness: state.currentBusiness?.id === id 
          ? { ...state.currentBusiness, ...updatedBusiness }
          : state.currentBusiness,
        loading: false,
        error: null
      }));
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update business status";
      console.error("Business update error:", errorMessage);
      set({ error: errorMessage, loading: false });
      throw error;
    }
  },
}));

export default useBusinessStore;