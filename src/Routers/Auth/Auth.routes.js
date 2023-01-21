import { Router } from "express";
import { RegisterController, LoginController } from '../../Controller/Auth/index.js'
const router = Router();

router.post('/register', RegisterController)
router.post('/login', LoginController)

export default router