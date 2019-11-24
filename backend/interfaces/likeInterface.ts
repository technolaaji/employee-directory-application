import mongoose from 'mongoose';

export interface ILikeInterface extends mongoose.Document {
    liked: string;
    type: string;
    who: string;
}
