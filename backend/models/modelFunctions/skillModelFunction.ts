import mongoose from 'mongoose';
import { ISkillInterface } from '../../interfaces/skillInterface';
import skillSchema from '../schemas/skillsSchema';

export default mongoose.model<ISkillInterface>('skill', skillSchema);
