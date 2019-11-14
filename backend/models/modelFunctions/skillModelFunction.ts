import mongoose from 'mongoose';
import skillSchema from '../schemas/skillsSchema';
import { skillInterface } from '../../interfaces/skillInterface';

export default mongoose.model<skillInterface>('skill', skillSchema)