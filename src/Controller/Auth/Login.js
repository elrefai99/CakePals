import bcrypt from 'bcryptjs'
import UserModel from '../../Models/User/User.model.js'
import { TokenUserId } from '../../Function/JWT/JWT.js'
import { maxAge } from '../../Function/JWT/JWT.js'
import { EmailUser } from '../../Function/JWT/JWT.js'
export const LoginController = async (req, res) => {
    try {
        const data = req.body

        // get email
        const getEmail = await UserModel.findOne({ email: data.email })
        if(!getEmail){
            res.status(402).json({status:402, message: 'Email not found'})
        }

        // Password
        const getPassword = await bcrypt.compare(data.password, getEmail.password)
        if (!getPassword) {
            res.status(402).json({ status: 402, message: 'Password is not correct' })
        }

        if(getEmail && getPassword) {
            // Create Token Headers
            const token = TokenUserId(getEmail._id)
            getEmail.token = token

            // Create Cookie Header
            const emailToken = EmailUser(getEmail.email)
            res.cookie('_Sett', emailToken, { httpOnly: true, secure: true, maxAge: maxAge })
            res.cookie('cakePalsAuth', token, { httpOnly: true, maxAge: maxAge })

            // desPlay Data  
            res.status(200).json({ status: 200, getEmail})
        }
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}