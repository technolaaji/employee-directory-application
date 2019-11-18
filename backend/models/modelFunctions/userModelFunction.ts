import mongoose from 'mongoose';
import { userInt } from '../../interfaces/userInterface';
import userSchema from '../schemas/userSchema';

export default mongoose.model<userInt>('user', userSchema);
