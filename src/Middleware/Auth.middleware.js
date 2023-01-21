import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    const token = req.params.token || req.body.token || req.query.token || req.headers['token']

    if(token){
        try{
            const token_secret = process.env.TokenSecret

            const user_id = jwt.verify(token, token_secret)
            if(user_id){
                req.user = user_id
                next()
            }else{
                res.status(403).json('there was an error creating')
            }
        }catch(err){
            res.status(500).json({ messageError: err })
        }
    }else{
        res.status(403).json('Authentication failed')
    }
}