import mongoose from 'mongoose';
import { skillInterface } from '../../interfaces/skillInterface';
import skillSchema from '../schemas/skillsSchema';

export default mongoose.model<skillInterface>('skill', skillSchema);
