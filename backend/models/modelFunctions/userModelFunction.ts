import mongoose from 'mongoose'
import userSchema from '../schemas/userSchema'
import { userInt } from '../../interfaces/userInterface';

export default mongoose.model<userInt>('user', userSchema)