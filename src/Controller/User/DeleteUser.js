import UserModel from '../../Models/User/User.model.js'

export const DeleteUserController = async (req, res, next) => {
    try {
        const userID = req.user._id

        await UserModel.findByIdAndDelete(userID)
        res.status(200).json({ statues: 200, message: "user success Delete Account" })
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err })
    }
}