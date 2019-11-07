import express from 'express'
import createSkill from '../../controllers/private/createSkill';
import updateSkill from '../../controllers/private/updateSkill';
import deleteSkill from '../../controllers/private/deleteSkill';

const router = express.Router();

router.post('/create', createSkill);

router.put('/update', updateSkill);

router.delete('/delete', deleteSkill);

export default router