import axios from "axios";
import useAuthStore from "@/stores/authStore";

const api = axios.create({
  baseURL: "http://10.21.1.148:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token from Zustand to requests
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
