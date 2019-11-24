import mongoose from 'mongoose';
import { ILikeInterface } from '../../interfaces/likeInterface';
import likeSchema from '../schemas/likeSchema';

export default mongoose.model<ILikeInterface>('like', likeSchema);
