import express from 'express';
import createSkill from '../../controllers/private/createSkill';
import deleteSkill from '../../controllers/private/deleteSkill';
import updateSkill from '../../controllers/private/updateSkill';

const router: express.Router = express.Router();

router.post('/create', createSkill);

router.put('/update', updateSkill);

router.delete('/delete', deleteSkill);

export default router;
