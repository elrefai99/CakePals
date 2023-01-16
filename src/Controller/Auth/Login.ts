import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Models/Users/User.model'
import { TokenIdOfAuth } from '../../Functions/Token/Token.Auth'
import bcrypt from 'bcryptjs'
import { maxAge } from '../../Functions/Token/Token.Auth'

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
    try {         
        // Get Email Address
        const getEmail = await UserModel.findOne({ email: req.body.email })
        if (!getEmail) {
            res.status(404).json({ status: 404, message: 'Email Not Founded' })
        }

        const getPassword = await bcrypt.compare(req.body.password, getEmail!.password)
        if (!getPassword) {
            res.status(404).json({ status: 404, message: 'Password is not correct' })
        }

        if (getEmail && getPassword) {

            const token = TokenIdOfAuth(getEmail.id)
            getEmail.token = token

            res.cookie('cakePalsAuth', token, { httpOnly: true, secure: true, maxAge: maxAge * 1000 })

            res.status(200).json({ status: 200, getEmail })
            next()
        }
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}