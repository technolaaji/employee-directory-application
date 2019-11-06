import express from 'express'
import createCompany from '../../controllers/private/createCompany';

const router = express.Router();

router.post('/create', createCompany);

export default router