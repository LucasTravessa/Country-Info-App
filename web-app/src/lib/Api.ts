import axios from "axios";

const baseURL = process.env.BACKEND_URL ?? "";

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
