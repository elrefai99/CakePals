import { RatingBakerModel } from '../../Models/Rating/RatingBaker.js'
import UserModel from '../../Models/User/User.model.js'
import { RatingModel } from '../../Models/Rating/Rating.model.js'

export const AddRatingOfBakerController = async (req, res, next) => {
    try {
        const data = req.body
        const getUser = await UserModel.findById(req.params.id)
        if(getUser.isBaker === true) {
            const getUserRating = await RatingModel.findOne({userId: req.user._id})
            if(getUserRating){
                res.status(402).json({status: 402, message: "You cant Rating"})
            }else{
                
                const IdBaker = req.params.id
                data.IdBaker = IdBaker

                const userId = req.user._id
                data.userId = userId

                const rating = await new RatingBakerModel(data)
                const ratingSave = await rating.save()
                res.status(200).json(ratingSave)
            }
        }
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}