// import axiosClient from '../axios/config.js';
import axios from "axios";
import dotenv from 'dotenv'

dotenv.config()

const api_key = process.env.ADMIN_API_KEY
const api_password = process.env.ADMIN_API_PASSWORD

/* const apiKey = '41683cff191681713fea162987f04600'
const apiPassword = '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' */

export const getCustomers = async (req, res) => {
    try {
        console.log('entrando try')
        await axios.get(`https://${api_key}:${api_password}@michael-gradiweb-store.myshopify.com/admin/api/2022-01/customers.json`)
        /* .then(response => {
            console.log(response)
            res.status(200).json({
                codeStatus: true,
                data: response.data
            })
        }) */
        if (response.data) {
            const vipCustomers = response.data.customers.filter(customer => customer.tags === 'VIP') * /
            const customersCount = {
                code: true,
                data: vipCustomers,
                count: vipCustomers.length
            }
        }
    } catch (e) {
        console.log(e);
    };
};

export const getFulfillmentOrders = async (req, res) => {
    try {
        axios.defaults.headers.common['Authorization'] = "Bearer" + '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'
        /* const response = await axios.get(`https://${api_key}:${api_password}@michael-gradiweb-store.myshopify.com/admin/api/2022-01/customers.json`) */
        const response = await axios.get(`https://${api_key}:${api_password}@michael-gradiweb-store.myshopify.com/admin/api/2022-01/orders.json?status=any`)
           /*  .then(response => {
                console.log(response)
                res.status(200).json({
                    codeStatus: true,
                    data: response.data
                })
            }) */
        if (response.data) {
            /* console.log(response.data.orders) */
            const fulFillmentOrders = response.data.orders.filter(order => order.fulfillment_status === 'fulfilled')
            const fulFilmentOrdersCount = {
                code: true,
                data: fulFillmentOrders,
                count: fulFillmentOrders.length
            }
            console.log(response.data.orders)
            /* console.log(fullFilmentOrdersCount) */
            res.status(200).json(fulFilmentOrdersCount)
        }
    } catch (e) {
        console.log(e);
    };
};

