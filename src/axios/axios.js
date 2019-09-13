import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
});
axiosInstance.interceptors.request.use(req => {
    req.headers["demo"]= "Ashish";
    return req;
})

export default axiosInstance;