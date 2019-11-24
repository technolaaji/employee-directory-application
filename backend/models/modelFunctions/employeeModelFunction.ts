import mongoose from 'mongoose';
import { IEmployeeInterface } from '../../interfaces/employeeInterface';
import employeeSchema from '../schemas/employeeSchema';

export default mongoose.model<IEmployeeInterface>('employee', employeeSchema);
