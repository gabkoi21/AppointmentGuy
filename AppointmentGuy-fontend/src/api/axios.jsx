import axios from "axios";
import useAuthStore from "@/stores/authStore";

const api = axios.create({
  baseURL: "https://appointmentguy.onrender.com",
});

console.log("API BASE URL:", api.defaults.baseURL);

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor to handle 401 (token expired)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    if (response?.status === 401) {
      // Try to refresh the token
      const refreshToken = useAuthStore.getState().getRefreshToken();

      if (refreshToken) {
        try {
          const refreshResponse = await api.post(
            "/auth/refresh",
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          const newAccessToken = refreshResponse.data.access_token;

          // Save the new access token in Zustand and localStorage
          useAuthStore.getState().setToken(newAccessToken);
          // Retry the original request with the new token
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        } catch (refreshError) {
          console.error("Refresh token failed, please login again.");
          useAuthStore.getState().logout();
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
