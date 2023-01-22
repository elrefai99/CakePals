import { Router } from "express";
import { GetUserController, UpdateUserController, UpdateUserPasswordController, DeleteUserController } from '../../Controller/User/User.js'
import {verifyToken} from '../../Middleware/Auth.middleware.js'
import { upload } from '../../Function/Multer/Multer.js'
const router = Router();

router.get('/getuser', verifyToken, GetUserController)
router.put('/updateuser', upload.single('ProfileImage'), verifyToken, UpdateUserController)
router.patch('/changeuserpassword', verifyToken, UpdateUserPasswordController)
router.delete('/deleteuser', verifyToken, DeleteUserController)

export default router