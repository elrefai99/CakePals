import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Models/Users/User.model'

export const DeleteUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        await UserModel.findByIdAndDelete({ id:req.body.id })
        res.status(200).json({ status: 200, message: 'Success Delete User' })
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}