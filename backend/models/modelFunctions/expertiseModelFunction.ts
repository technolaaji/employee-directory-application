import mongoose from 'mongoose'
import expertiseSchema from '../schemas/expertiseSchema';
import { expertiseInterface } from '../../interfaces/expertiseInterface';

export default mongoose.model<expertiseInterface>('expertise', expertiseSchema);