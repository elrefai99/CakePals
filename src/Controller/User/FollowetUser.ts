import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Models/Users/User.model'

export const FollowUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    
    const userID = req.user.id
    const currentUserFollower = req.params.id

    if (userID !== req.params.id) {
        try {
            const currentUser = await UserModel.findById(currentUserFollower)
            const users = await UserModel.findById(userID)
            if (!(currentUser?.followers.includes(users))) {
                
            }
            next()
        }
        catch (err) {
            res.status(500).json({ message: err })
        }
    }
    else {
        res.status(403).json('you cant follow yourself')
    }
}

export const UnFollowUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {

        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}