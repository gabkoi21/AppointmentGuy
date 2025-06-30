import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.140.150:5000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Get token from localStorage or zustand-persist
const getTokenFromStorage = () => {
  const authStorage = JSON.parse(localStorage.getItem("auth-storage") || "{}");
  return localStorage.getItem("token") || authStorage?.state?.token || null;
};

const getRefreshTokenFromStorage = () => {
  ss;
  const authStorage = JSON.parse(localStorage.getItem("auth-storage") || "{}");
  return (
    localStorage.getItem("refresh_token") ||
    authStorage?.state?.refresh_token ||
    authStorage?.state?.refreshToken ||
    null
  );
};

const updateTokensInStorage = (accessToken, refreshToken = null) => {
  localStorage.setItem("token", accessToken);
  if (refreshToken) {
    localStorage.setItem("refresh_token", refreshToken);
  }

  const authStorage = JSON.parse(localStorage.getItem("auth-storage") || "{}");
  if (authStorage?.state) {
    authStorage.state.token = accessToken;
    if (refreshToken) {
      authStorage.state.refresh_token = refreshToken;
      authStorage.state.refreshToken = refreshToken;
    }
    localStorage.setItem("auth-storage", JSON.stringify(authStorage));
  }
};

const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");

  const authStorage = JSON.parse(localStorage.getItem("auth-storage") || "{}");
  if (authStorage?.state) {
    delete authStorage.state.token;
    delete authStorage.state.refresh_token;
    delete authStorage.state.refreshToken;
    localStorage.setItem("auth-storage", JSON.stringify(authStorage));
  }

  localStorage.removeItem("auth-storage");
};

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling expired token and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      const refreshToken = getRefreshTokenFromStorage();
      if (!refreshToken) {
        console.warn("⚠️ No refresh token found, logging out...");
        clearAuthData();
        window.location.href = "/";
        return Promise.reject(error);
      }

      try {
        console.log("🔁 Refreshing token...");
        const res = await axios.post(
          "http://192.168.140.150:5000/auth/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );

        const { access_token, refresh_token } = res.data;

        updateTokensInStorage(access_token, refresh_token || refreshToken);

        processQueue(null, access_token);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error(
          "Token refresh failed:",
          refreshError?.response?.data || refreshError
        );
        processQueue(refreshError, null);
        clearAuthData();
        window.location.href = "/";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
