import express from 'express';
import authorize from '../../controllers/auth/authroize';
import deauthorize from '../../controllers/auth/deauthorize';
import authorityMiddleware from '../../middlewares/authorityMiddleware';
import validateMiddleware from '../../middlewares/validateMiddleware';

const router: express.Router = express.Router();

// router.use(validateMiddleware);
// router.use(authorityMiddleware);

router.post('/authorize', authorize);
router.post('/deauthorize', deauthorize);

export default router;
