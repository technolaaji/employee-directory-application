import express from 'express'
import privateCompanyRoute from './innerPrivateRoute/company';
import privateEmployeeRoute from './innerPrivateRoute/employee';
import privateExpertiseRoute from './innerPrivateRoute/expertise';
import privateSkillRoute from './innerPrivateRoute/skill';
import validateMiddleware from '../middlewares/validateMiddleware';
import authorityMiddleware from '../middlewares/authorityMiddleware';
import verifiedMiddleware from '../middlewares/verifiedMiddleware';

const router = express.Router();

router.use(validateMiddleware);


router.use('/employee', verifiedMiddleware, privateEmployeeRoute);
router.use('/company',authorityMiddleware,privateCompanyRoute);
router.use('/expertise',authorityMiddleware, privateExpertiseRoute);
router.use('/skill',authorityMiddleware, privateSkillRoute);

export default router