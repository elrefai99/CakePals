import UserModel from '../../Models/User/User.model.js'

export const GetUserController = async (req, res, next) =>{
    try{
        const userID = req.user._id

        const getUser = await UserModel.findById(userID)

        res.status(200).json({statues: 200, getUser})
        next()
    }catch(err){
        res.status(500).json({ status: 500, message: err.message })
    }
}