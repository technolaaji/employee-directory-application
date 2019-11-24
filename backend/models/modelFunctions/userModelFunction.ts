import mongoose from 'mongoose';
import { IUserInt } from '../../interfaces/userInterface';
import userSchema from '../schemas/userSchema';

export default mongoose.model<IUserInt>('user', userSchema);
