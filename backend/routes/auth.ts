import express from 'express';
import authority from './innerAuthRoute/authorize';
import create from './innerAuthRoute/create';
// turns out delete is a reserved keyword
import deleteRoute from './innerAuthRoute/delete';
import update from './innerAuthRoute/update';
import validate from './innerAuthRoute/validate';

const router: express.Router = express.Router();

router.use('/create', create);

router.use('/update', update);

router.use('/delete', deleteRoute);

router.use('/validate', validate);

router.use('/authority', authority);

export default router;
