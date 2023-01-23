import { ProductModel } from '../../Models/Products/Product.model.js'

export const DeleteProductsController = async (req, res, next) => {
    try {
        const getUser = await ProductModel.findOne({ OwnerID : req.user.id})
        if(getUser){
            await ProductModel.findByIdAndDelete(req.params.id)
            res.status(200).json({ statues: 200, message: "user success Delete product" })
            next()
        }else{
            res.status(401).json({ statues: 401, message: "u cant delete product" })
        }
    } catch (err) {
        res.status(500).json({ status: 500, message: err })
    }
}