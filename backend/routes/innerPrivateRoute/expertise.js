import express from 'express'
import createExpertise from '../../controllers/private/createExpertise';
import updateExpertise from '../../controllers/private/updateExpertise';
import deleteExpertise from '../../controllers/private/deleteExpertise';

const router = express.Router();

router.post('/create', createExpertise);

router.put('/update', updateExpertise);

router.delete('/delete', deleteExpertise);

export default router