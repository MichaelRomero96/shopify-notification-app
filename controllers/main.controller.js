// import axiosClient from '../axios/config.js';
import axios from "axios";


const api_key = process.env.ADMIN_API_KEY
const api_password = process.env.ADMIN_API_PASSWORD

export const getCustomers = async (req, res) => {
    try {
         axios.defaults.headers.common['Authorization'] = "Bearer" + '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'
         const response = await axios.get(`https://${api_key}:${api_password}@michael-gradiweb-store.myshopify.com/admin/api/2022-01/customers.json`)
         console.log(response.data)
    } catch (e) {
        console.log(e);
    };
};

