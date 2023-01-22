import UserModel from '../../Models/User/User.model.js'
import { RatingModel } from '../../Models/Rating/Rating.model.js'

// get main user
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

// get user by id 
export const GetUserByIdController = async (req, res, next) => {
    try {
        const getUser = await UserModel.findById(req.params.id)
        if(getUser.isBaker){
            const getRating = await RatingModel.find({ IdBaker: getUser._id })
            res.status(200).json({ statues: 200, getUser, getRating: getRating })
        }else{
            res.status(200).json({ statues: 200, getUser })
        }
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}