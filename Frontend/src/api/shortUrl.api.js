import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";


export const createShortUrl = async (url, customUrl) => {
  const response = await axiosInstance.post(`api/create`, { url, customUrl });
  return response.data;

}

