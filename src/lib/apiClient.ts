import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
