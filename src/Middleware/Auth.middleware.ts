import { AuthRequest } from '../@types/Auth'
import { AuthDataStore } from '../@types/Auth'
import { Response, NextFunction } from 'express'
import { UserModel } from '../Models/Users/User.model'
import * as jwt from 'jsonwebtoken'

export const verifyToken = async (req: AuthRequest | any, res: Response, next: NextFunction) => {
    const token = req.body.token || req.headers['token'] || req.cookies.cakePalsAuth

    if (token) {
        try {
            const tokenSecret = process.env.TokenSecret as string

            const userId = (await jwt.verify(token, tokenSecret)) as AuthDataStore
            const id = userId._id

            const user = await UserModel.findById(id)
            if (user) {
                req.user = user
                next()
            }
            else {
                res.status(403).json('there was an error creating')
            }
        }   
        catch (err) {
            res.status(500).json({ messageError: err })
        }
    }
    else {
        res.status(403).json('Authentication failed')
    }
}