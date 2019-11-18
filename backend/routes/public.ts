import express from 'express';
import publicCompanyRoute from './innerPublicRoutes/company';
import publicEmployeeRoute from './innerPublicRoutes/employee';

const router: express.Router = express.Router();

router.use('/company', publicCompanyRoute);
router.use('/employee', publicEmployeeRoute);

export default router;
