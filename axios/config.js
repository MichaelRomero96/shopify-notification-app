import axios from 'axios'


const axiosClient = axios.create({
    baseURL: process.env.SHOPIFY_STORE_URL
})


export default axiosClient