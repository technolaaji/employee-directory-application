import express from 'express'
import privateCompanyRoute from './innerPrivateRoute/company';
import privateEmployeeRoute from './innerPrivateRoute/employee';
import privateExpertiseRoute from './innerPrivateRoute/expertise';
import privateSkillRoute from './innerPrivateRoute/skill';
import validateMiddleware from '../middlewares/validateMiddleware';


const router = express.Router();

router.use(validateMiddleware);

router.use('/company',privateCompanyRoute);
router.use('/employee', privateEmployeeRoute);
router.use('/expertise', privateExpertiseRoute);
router.use('/skill', privateSkillRoute);

export default router