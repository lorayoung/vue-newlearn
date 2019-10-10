import axios from 'axios'
axios.defaults.baseURL = global_.BASE_URL;
let base = "https://172.16.4.200/";
export const getProduct = params => {
    return axios.get(`${base}/product/info/${params}`)
}