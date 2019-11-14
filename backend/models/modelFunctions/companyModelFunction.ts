import mongoose from 'mongoose'
import companySchema from '../schemas/companySchema'
import { companyInterface } from '../../interfaces/companyInterface';

export default mongoose.model<companyInterface>('company', companySchema);