import mongoose from 'mongoose';

export interface expertiseInterface extends mongoose.Document {
    title: String;
}
