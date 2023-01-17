import { Router } from 'express'
import { GetUsersController, UpdateUsersController, UpdateUsersPasswordController } from '../../Controller/User/User.index'
import { verifyToken } from '../../Middleware/Auth.middleware'
const router = Router()

router.get('/getuser', verifyToken, GetUsersController)

router.put('/updateuser', verifyToken, UpdateUsersController)

router.patch('/updatepassword', verifyToken, UpdateUsersPasswordController)

export default router