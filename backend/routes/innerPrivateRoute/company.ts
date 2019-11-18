import express from 'express';
import createCompany from '../../controllers/private/createCompany';
import deleteCompany from '../../controllers/private/deleteCompany';
import updateCompany from '../../controllers/private/updateCompany';

const router: express.Router = express.Router();

router.post('/create', createCompany);

router.put('/update', updateCompany);

router.delete('/delete', deleteCompany);

export default router;
