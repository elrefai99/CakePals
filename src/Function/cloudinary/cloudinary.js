import cloud from '../../Config/Cloud.js'

export const cloudinaryImageUploadMethod = async (file, userIdAndUsername) => {
    return new Promise(resolve => {
        cloud.uploader.upload(file, {
            folder: userIdAndUsername
        },(err, res) => {
            resolve({
                res: res.secure_url
            })
        })
    })
}