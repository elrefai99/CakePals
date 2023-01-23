import { ProductModel } from '../../Models/Products/Product.model.js'

export const GetAllProductsController = async (req, res, next) => {
    try {   
        const products = await ProductModel.find()
        res.status(200).json({ status: 200, products })
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}

export const GetProductsByIdController = async (req, res, next) => {
    try {
        const products = await ProductModel.findById(req.params.id)
        res.status(200).json({ status: 200, products })
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}