import { Request, Response, NextFunction } from 'express'

export const SearchController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const search_query = req.query.search_query
        res.status(200).json(search_query)
        next()
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}