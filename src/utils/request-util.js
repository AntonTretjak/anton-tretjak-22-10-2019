import axios from "axios";

async function defaultRequest(axiosInstance, requestConfig) {
    const request = axiosInstance.request(requestConfig);
    return await request;
}

const axiosInstance = axios.create();

export async function callServer(requestConfig) {
    return await defaultRequest(axiosInstance, requestConfig)
}
