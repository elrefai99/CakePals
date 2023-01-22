import multer from "multer";
import path from "path";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1];
        cb(null, `${Date.now()}.${ext}`)
    }
})

export const upload = multer({ storage: multerStorage });
