import cloud from '../../Config/Cloud.js'

export const cloudinaryImageUploadMethod = async file => {
    return new Promise(resolve => {
        cloud.uploader.upload(file, (err, res) => {
            resolve({
                res: res.secure_url
            })
        }
        )
    })
}