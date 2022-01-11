import { Router } from 'express'
import { getCustomers, getFulfillmentOrders } from '../controllers/main.controller.js'

const router = Router()

router.get('/getCustomersCount', getCustomers)
router.get('/getFulfillmentOrdersCount', getFulfillmentOrders)

export default router