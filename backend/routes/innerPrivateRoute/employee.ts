import express from 'express';
import createEmployee from '../../controllers/private/createEmployee';
import deleteEmployee from '../../controllers/private/deleteEmployee';
import updateEmployee from '../../controllers/private/updateEmployee';

const router: express.Router = express.Router();

router.post('/create', createEmployee);

router.put('/update', updateEmployee);

router.post('/delete', deleteEmployee);

export default router;
