import express from 'express';
import getEmployee from '../../controllers/public/getEmployee';

const router: express.Router = express.Router();

router.post('/search', getEmployee);

export default router;
