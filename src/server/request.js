import axios from "axios";
import { ENDPOINT, TOKEN } from "../const";
let token = localStorage.getItem(TOKEN);

export const request  = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
  headers: { authorization : token ? `Bearer ${token}` : ""},
});


