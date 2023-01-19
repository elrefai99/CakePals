import { Router } from 'express'
import { verifyToken } from '../../Middleware/Auth.middleware'
import { SearchController } from '../../Controller/Search/Search'
const router = Router()

router.post('/result', verifyToken, SearchController)

export default router