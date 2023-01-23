import { ProductModel } from '../../Models/Products/Product.model.js'

export const UpdateProductsController = async (req, res, next) => {
    try {
        const getUser = await ProductModel.findOne({ OwnerID: req.user.id })
        if (getUser) {
            await ProductModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            })
            res.status(200).json({ statues: 200, message: "user success Update product" })
            next()
        } else {
            res.status(401).json({ statues: 401, message: "u cant Update product" })
        }
    } catch (err) {
        res.status(500).json({ status: 500, message: err })
    }
}