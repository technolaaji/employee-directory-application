import express from 'express'
import createEmployee from '../../controllers/private/createUser';

const router = express.Router();

router.post('/create', createEmployee)


export default router