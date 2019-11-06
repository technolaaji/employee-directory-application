import mongoose from 'mongoose';
import employeeSchema from '../schemas/employeeSchema';

export default mongoose.model('employee', employeeSchema)