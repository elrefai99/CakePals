import {v2 as colud} from 'cloudinary'

colud.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret

})
export default colud

