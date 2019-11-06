import express from 'express'
import createEmployee from '../../controllers/private/createEmployee';
import updateEmployee from '../../controllers/private/updateEmployee';
import deleteEmployee from '../../controllers/private/deleteEmployee';

const router = express.Router();

router.post('/create', createEmployee)

router.put('/update', updateEmployee);

router.delete('/delete', deleteEmployee);

export default router