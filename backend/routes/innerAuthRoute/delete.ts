import express from 'express'
// turns out delete was a reserved word
import deleteUser from '../../controllers/auth/deleteUser';

const router: express.Router = express.Router();


router.delete('/', deleteUser);

export default router