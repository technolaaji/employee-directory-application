import express from 'express'
import create from './innerAuthRoute/create';
import update from './innerAuthRoute/update';
// turns out delete is a reserved keyword
import deleteRoute from './innerAuthRoute/delete';
import validate from './innerAuthRoute/validate';
import authority from './innerAuthRoute/authorize';

const router = express.Router();

router.use('/create', create);

router.use('/update', update);

router.use('/delete', deleteRoute);

router.use('/validate', validate);

router.use('/authority', authority);

export default router