import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";


export const loginUser = async (email, password) => {

    const response = await axiosInstance.post(`api/auth/login`, { email, password });
    return response.data;

}
export const registerUser = async (name, email, password) => {

    const response = await axiosInstance.post(`api/auth/register`, { name, email, password });
    return response.data;

}
export const logoutUser = async () => {
    try {
        const response = await axiosInstance.get(`api/auth/logout`);
        return response.data;
    } catch (err) {
        throw new Error(err);
    }

}

export const getCurrentUser = async () => {
    const { data } = await axiosInstance.get("/api/auth/me");
    return data;
}

export const getAllUserUrls=async()=>{
    const {data}=await axiosInstance.post("/api/user/urls");
     return data.urls;
}

