import express from 'express'
import create from './innerAuthRoute/create';

const router = express.Router();

router.use('/create', create);

export default router