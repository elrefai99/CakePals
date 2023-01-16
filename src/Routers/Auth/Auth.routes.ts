import { Router } from 'express'
import { RegisterController, LoginController } from '../../Controller/Auth/index.auth'
const router = Router()

router.post('/register', RegisterController)
router.post('/login', LoginController)

export default router