import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("hacklearn_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const authApi = {
  login: (payload) => api.post("/login", payload),
  register: (payload) => api.post("/register", payload),
  getUser: () => api.get("/user"),
};

export const labApi = {
  getLabs: () => api.get("/labs"),
  submitFlag: (payload) => api.post("/submit-flag", payload),
};

export default api;
