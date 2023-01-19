import { Router } from 'express'
import { GetUsersController, UpdateUsersController, UpdateUsersPasswordController, FollowUsersController, UnFollowUsersController, DeleteUsersController } from '../../Controller/User/User.index'
import { verifyToken } from '../../Middleware/Auth.middleware'
const router = Router()

router.get('/getuser', verifyToken, GetUsersController)

router.put('/updateuser', verifyToken, UpdateUsersController)

router.patch('/updatepassword', verifyToken, UpdateUsersPasswordController)

router.patch('/followusers', verifyToken, FollowUsersController)

router.patch('/unfollowusers', verifyToken, UnFollowUsersController)

router.delete('/deleteusers', verifyToken, DeleteUsersController)

export default router