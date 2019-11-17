import express from 'express'
import getCompany from '../../controllers/public/getCompany';

const router: express.Router = express.Router();

router.post('/search',getCompany);

export default router