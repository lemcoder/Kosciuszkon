import axios, {
    AxiosInstance,
    InternalAxiosRequestConfig,
} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api-rspo.mein.gov.pl/api/',
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        // config.headers.Authorization = 'Bearer <example>'

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;
