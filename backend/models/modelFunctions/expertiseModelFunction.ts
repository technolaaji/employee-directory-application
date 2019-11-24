import mongoose from 'mongoose';
import { IExpertiseInterface } from '../../interfaces/expertiseInterface';
import expertiseSchema from '../schemas/expertiseSchema';

export default mongoose.model<IExpertiseInterface>(
    'expertise',
    expertiseSchema
);
