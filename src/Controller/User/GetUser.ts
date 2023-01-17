import { Request, Response, NextFunction } from 'express'

export const GetUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        res.status(200).json(req.user)
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}