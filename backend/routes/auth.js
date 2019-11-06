import express from 'express'
import create from './innerAuthRoute/create';
import update from './innerAuthRoute/update';
// turns out delete is a reserved keyword
import deleteRoute from './innerAuthRoute/delete';
import validate from './innerAuthRoute/validate';

const router = express.Router();

router.use('/create', create);

router.use('/update', update);

router.use('/delete', deleteRoute);

router.use('/validate', validate);

export default router