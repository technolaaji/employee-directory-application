import mongoose from 'mongoose';

export interface IExpertiseInterface extends mongoose.Document {
    title: string;
}
