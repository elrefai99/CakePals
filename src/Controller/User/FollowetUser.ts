import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Models/Users/User.model'

export const FollowUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    
    const userId = req.user.id
    if (userId !== req.params.id) {
        try {
            const user = await UserModel.findById(req.params.id)
            const followerID = await UserModel.findById(userId)

            if (!(user?.followers.includes(userId))) {
                await user?.updateOne({ $push: { followers: userId } })
                await followerID?.updateOne({ $push: { followings: req.params.id } })

                res.status(200).json({ success: true, message: 'Success Follow!' })
                next()
            } 
            else {
                res.status(403).json('you already follow this user')
            }
        } 
        catch (error) {
            res.status(500).send({ success: false, message: 'fail', err: error })
        }
    } 
    else {
        res.status(403).json('you cant follow yourself')
    }
}

export const UnFollowUsersController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const userId = req.user.id
        if (userId !== req.params.id) {
            try {
                const user = await UserModel.findById(req.params.id)
                const UnfollowerID = await UserModel.findById(userId)
                if (user?.followers.includes(userId)) {
                    await user.updateOne({
                        $pull: {
                            followers: userId,
                        },
                    })
                    await UnfollowerID?.updateOne({
                        $pull: {
                            followings: req.params.id,
                        },
                    })

                    res.status(200).json('user has been unfollowed')

                    next()
                } 
                else {
                    res.status(403).json('you dont follow this user')
                }
            } 
            catch (error) {
                res.status(500).send({ success: false, message: 'fail', err: error })
            }
        } 
        else {
            res.status(403).json('you cant unfollow yourself')
        }   
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}