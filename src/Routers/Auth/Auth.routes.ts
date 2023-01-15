import { Router } from 'express'
import { RegisterController } from '../../Controller/Auth/index.auth'
const router = Router()

router.post('/register', RegisterController)
router.post('/login')

export default router