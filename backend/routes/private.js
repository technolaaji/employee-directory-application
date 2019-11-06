import express from 'express'
import privateCompanyRoute from './innerPrivateRoute/company';
import privateEmployeeRoute from './innerPrivateRoute/employee';

const router = express.Router();

router.use('/company',privateCompanyRoute);
router.use('/employee', privateEmployeeRoute);

export default router