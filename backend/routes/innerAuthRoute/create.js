import express from 'express'
import createUser from '../../controllers/auth/createUser';

const router = express.Router();

router.post('/', createUser);

export default router