import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:import.meta.env.VITE_BACKEND_URL || "http://localhost:3000",
   withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("Bad request", data);
          break;

        case 401:
          console.error("Unauthorized - redirect to login");
          
          break;

        case 403:
          console.error("Forbidden");
          break;

        case 404:
          console.error("Not found");
          break;

        case 500:
          console.error("Server error");
          break;

        default:
          console.error("Unhandled error", data);
      }
    }
    else if (error.request) {
      console.error("Network error - no response from server");
    }
    else {
      console.error("Axios error", error.message);
    }

    return Promise.reject({
  status: error.response?.status,
  message: error.response?.data?.message,
});

  }
);


