import express from 'express'
import createCompany from '../../controllers/private/createCompany';
import updateCompany from '../../controllers/private/updateCompany';
import deleteCompany from '../../controllers/private/deleteCompany';

const router = express.Router();

router.post('/create', createCompany);

router.put('/update', updateCompany);

router.delete('/delete', deleteCompany);

export default router