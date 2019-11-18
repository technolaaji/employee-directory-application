import express from 'express';
import authorityMiddleware from '../middlewares/authorityMiddleware';
import validateMiddleware from '../middlewares/validateMiddleware';
import verifiedMiddleware from '../middlewares/verifiedMiddleware';
import privateCompanyRoute from './innerPrivateRoute/company';
import privateEmployeeRoute from './innerPrivateRoute/employee';
import privateExpertiseRoute from './innerPrivateRoute/expertise';
import privateSkillRoute from './innerPrivateRoute/skill';

const router: express.Router = express.Router();

router.use(validateMiddleware);

router.use('/employee', verifiedMiddleware, privateEmployeeRoute);
router.use('/company', authorityMiddleware, privateCompanyRoute);
router.use('/expertise', authorityMiddleware, privateExpertiseRoute);
router.use('/skill', authorityMiddleware, privateSkillRoute);

export default router;
