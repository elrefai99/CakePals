import { Request, Response, NextFunction } from 'express'
import { UserModel } from '../../Models/Users/User.model'

export const SearchController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        //const validWords = /^[a-zA-Z]+$/i

        const search_query_username = req.query.search_query_username
        if (search_query_username) {
            const getUser = await UserModel.findOne({
                fName: search_query_username,
            })

            res.status(200).json({
                status: 200,
                getUser: {
                    id: getUser?.id,
                    username: getUser?.username,
                    Image: getUser?.profileImageUrl,
                },
            })
        }
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}