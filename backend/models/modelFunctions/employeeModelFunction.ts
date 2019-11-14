import mongoose from 'mongoose';
import employeeSchema from '../schemas/employeeSchema';
import { employeeInterface } from '../../interfaces/employeeInterface';

export default mongoose.model<employeeInterface>('employee', employeeSchema)