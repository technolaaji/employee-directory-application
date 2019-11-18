import express from 'express';
import update from '../../controllers/auth/updateUser';
import validateMiddleware from '../../middlewares/validateMiddleware';

const router: express.Router = express.Router();

router.put('/', validateMiddleware, update);

export default router;
