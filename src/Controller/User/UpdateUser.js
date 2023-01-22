import UserModel from '../../Models/User/User.model.js'
import bcrypt from 'bcryptjs'
import colud from '../../Config/Cloud.js'

export const UpdateUserController = async (req, res, next) => {
    try {
        const userID = req.user._id

        await UserModel.findByIdAndUpdate(userID, {
            $set: req.body,
        })
        res.status(200).json({ statues: 200, message: "user success update" })
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err })
    }
}

export const UpdateUserPasswordController = async (req, res, next) => {
    try {
        const userID = req.user._id
        
        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)
        
        await UserModel.findByIdAndUpdate(userID, {
            password: password
        })
        res.status(200).json({ statues: 200, message: "user success update password" })
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}