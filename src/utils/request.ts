import axios from "axios";
const API_URL = import.meta.env.VITE_BE_API_URL;


let unauthorizedHandler: (() => void) | null = null;
export const setUnauthorizedHandler = (fn: () => void): void => {
    unauthorizedHandler = fn;
};

const apiAppSettingsInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${localStorage.getItem("app-token")}`,
    },
    timeout: 3000,
});

apiAppSettingsInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("app-token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiAppSettingsInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401 && unauthorizedHandler) {
            unauthorizedHandler();
        }
        return Promise.reject(error);
    }
);

export default apiAppSettingsInstance; 