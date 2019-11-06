import express from 'express'
import update from '../../controllers/auth/updateUser';

const router = express.Router();

router.put('/', update);

export default router