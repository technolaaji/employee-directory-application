import express from 'express'
import validate from '../../controllers/auth/validateUser';

const router: express.Router = express.Router();

router.post('/', validate);

export default router