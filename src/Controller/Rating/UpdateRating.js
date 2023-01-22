import { RatingModel } from '../../Models/Rating/Rating.model.js'

export const UpdateRatingController = async (req, res, next) => {
    try {
        const data = req.body
        await RatingModel.findByIdAndUpdate(req.params.id, {
            $set: data
        })
        res.status(200).json('updated')
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}