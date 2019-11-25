import express from 'express';

import check from '../../controllers/private/likeChecker';
import liking from '../../controllers/private/likeSomething';
import unliking from '../../controllers/private/unlikeSomething';

const router: express.Router = express.Router();

router.post('/like', liking);

router.post('/unlike', unliking);

router.post('/check', check);

export default router;
