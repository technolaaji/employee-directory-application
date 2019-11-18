import mongoose from 'mongoose';
import { expertiseInterface } from '../../interfaces/expertiseInterface';
import expertiseSchema from '../schemas/expertiseSchema';

export default mongoose.model<expertiseInterface>('expertise', expertiseSchema);
