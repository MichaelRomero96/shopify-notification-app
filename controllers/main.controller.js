// import axiosClient from '../axios/config.js';
import axios from "axios";


/* const api_key = process.env.ADMIN_API_KEY
const api_password = process.env.ADMIN_API_PASSWORD */

const apiKey = '41683cff191681713fea162987f04600'
const apiPassword = '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'

export const getCustomers = async (req, res) => {
    try {
        axios.defaults.headers.common['Authorization'] = "Bearer" + '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'
        /* const response = await axios.get(`https://${api_key}:${api_password}@michael-gradiweb-store.myshopify.com/admin/api/2022-01/customers.json`) */
        const response = await axios.get(`https://${apiKey}:${apiPassword}@michael-gradiweb-store.myshopify.com/admin/api/2022-01/customers.json`)
        console.log(response.data.customers)
    } catch (e) {
        console.log(e);
    };
};

