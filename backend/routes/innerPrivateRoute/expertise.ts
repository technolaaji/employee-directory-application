import express from 'express';
import createExpertise from '../../controllers/private/createExpertise';
import deleteExpertise from '../../controllers/private/deleteExpertise';
import updateExpertise from '../../controllers/private/updateExpertise';

const router: express.Router = express.Router();

router.post('/create', createExpertise);

router.put('/update', updateExpertise);

router.delete('/delete', deleteExpertise);

export default router;
