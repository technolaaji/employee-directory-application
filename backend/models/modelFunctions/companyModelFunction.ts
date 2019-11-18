import mongoose from 'mongoose';
import { companyInterface } from '../../interfaces/companyInterface';
import companySchema from '../schemas/companySchema';

export default mongoose.model<companyInterface>('company', companySchema);
