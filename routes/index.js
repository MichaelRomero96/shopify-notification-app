import { Router } from 'express'
import { getCustomers } from '../controllers/main.controller.js'

const router = Router()

router.get('/getCostumersCount', getCustomers)

export default router