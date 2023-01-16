import multer from 'multer'
import { v4 } from 'uuid'
import path from 'path'
import { Request } from 'express'

const multerStorage = multer.diskStorage({
    destination: (_req, _file, cb) =>{
        cb(null, path.join(__dirname, '/upload/'))
    },
    filename: (_req: Request, file: any, cb: any) => {
        cb(null, v4() + path.extname(file.originalname))
    },
})

export const uploadMulter = multer({ storage: multerStorage })