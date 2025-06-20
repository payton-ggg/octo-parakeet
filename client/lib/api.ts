import axios from "axios";

export const api = axios.create({
  baseURL: "https://friendly-octo-potato-production.up.railway.app/api/",
});
