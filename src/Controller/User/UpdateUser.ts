import { Request, Response, NextFunction } from 'express'
import * as bcrypt from 'bcryptjs'
import { UserModel } from '../../Models/Users/User.model'

export const UpdateUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const userId = req.user.id
        await UserModel.findByIdAndUpdate(userId, {
            $set: req.body,
        })
        res.status(200).json({ status: 200, message: 'success update data' })
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}

export const UpdateUsersPasswordController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        // hash Password
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        const userId = req.user.id
        await UserModel.findByIdAndUpdate(userId, {
            password: password,
        })
        res.status(200).json({ status: 200, message: 'success update password' })
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}