import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Models/Users/User.model'
import { BakerModel } from '../../Models/Users/Baker'
import { MemberModel } from '../../Models/Users/Member'
import { WelcomNewUser } from '../../Functions/Email/Welcomenewuser'
import * as bcrypt from 'bcryptjs'

export const RegisterController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        if (!(data.type === 'member' || data.type === 'baker')) {
            res.status(403).json({ status: 403, message: 'should select type' })
        }
        else {
            // hash Password
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(req.body.password, salt)
            data.password = password

            // get Email if used or not
            const getEmail = await UserModel.findOne({ email: req.body.email })
            if (getEmail) {
                res.status(403).json({ status: 403, message: 'Email already exists' })
            }
            else {
                if (data.type === 'member') {
                    const user = await new MemberModel(data)
                    const newUser = await user.save()

                    res.status(200).json({ status: 200, message: 'success', newUser })
                    next()
                }
                else if (data.type === 'baker') {
                    const user = await new BakerModel(data)
                    const newUser = await user.save()
                    WelcomNewUser(req.body.email, req.body.username)

                    res.status(200).json({ status: 200, message: 'success', newUser })
                    next()
                }
            }
        }
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}