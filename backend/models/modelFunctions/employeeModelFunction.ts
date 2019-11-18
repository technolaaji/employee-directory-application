import mongoose from 'mongoose';
import { employeeInterface } from '../../interfaces/employeeInterface';
import employeeSchema from '../schemas/employeeSchema';

export default mongoose.model<employeeInterface>('employee', employeeSchema);
