import express from 'express';
import emailUpdate from '../../controllers/auth/updateEmail';
import passwordUpdate from '../../controllers/auth/updatePassword';
import update from '../../controllers/auth/updateUser';
import validateMiddleware from '../../middlewares/validateMiddleware';

const router: express.Router = express.Router();

router.put('/', validateMiddleware, update);

router.put('/email', validateMiddleware, emailUpdate);

router.put('/password', validateMiddleware, passwordUpdate);

export default router;
