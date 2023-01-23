import { Router } from "express";
import { verifyToken } from '../../Middleware/Auth.middleware.js'
import {
    AddProductsController, GetAllProductsController, GetProductsByIdController, UpdateProductsController, DeleteProductsController } from '../../Controller/Products/Products.js'
import { upload } from '../../Function/Multer/Multer.js'
const router = Router();

router.post('/addproducts', verifyToken, upload.array('ProductImages', 4), AddProductsController)
router.put('/Updateproducts', verifyToken, upload.array('ProductImages', 4), UpdateProductsController)
router.delete('/deleteproducts', verifyToken, DeleteProductsController)
router.get('/getallproducts', GetAllProductsController)
router.get('/getproduct/:id', GetProductsByIdController)

export default router