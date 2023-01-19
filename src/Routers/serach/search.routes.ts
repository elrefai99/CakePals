import { Router } from 'express'
import { verifyToken } from '../../Middleware/Auth.middleware'
import { SearchController } from '../../Controller/Search/Search'
const router = Router()

router.get('/result', verifyToken, SearchController)

export default router