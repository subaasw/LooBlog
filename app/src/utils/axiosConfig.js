import axiosCore from "axios";

axiosCore.defaults.withCredentials = true;
axiosCore.defaults.baseURL = "http://localhost:8800/api";

const axios = axiosCore;

export default axios;
