import mongoose from 'mongoose';
import { ICompanyInterface } from '../../interfaces/companyInterface';
import companySchema from '../schemas/companySchema';

export default mongoose.model<ICompanyInterface>('company', companySchema);
