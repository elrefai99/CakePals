import { ProductModel } from '../../Models/Products/Product.model.js'
import UserModel from '../../Models/User/User.model.js'
import { cloudinaryImageUploadMethod } from "../../Function/cloudinary/cloudinary.js"

export const AddProductsController = async (req, res) => {
    try {
        const data = req.body
        const userId = req.user._id
        const getUser = await UserModel.findById(userId)
        if(getUser.isBaker == true) {
            const urls = [];
            const files = req.files;
            for (const file of files) {
                const { path } = file;

                const userIdAndUsername = getUser._id + '_' + getUser.username
                const newPath = await cloudinaryImageUploadMethod(path, userIdAndUsername);
                urls.push(newPath);
            }
            const multiImage = urls.map(url => url.res)
            data.ProductImages = multiImage

            data.OwnerID = userId


            const addProducts = await new ProductModel(data)
            const saveProduct = await addProducts.save()
            res.status(200).json({status: 200, saveProduct});
        }else{
            res.status(402).json({status: 402, message: "you cant create products"});
        }
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    }
}