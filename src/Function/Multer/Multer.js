import multer from "multer";
import path from "path";

const multerStorage = multer.diskStorage({
    destination: (cb) => {
        cb(null, path.join(__dirname,'/uploads/'))
    }
})