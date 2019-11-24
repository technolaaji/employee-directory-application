import mongoose from 'mongoose';

export interface IUserInt extends mongoose.Document {
    email: string;
    password: string;
    validated: boolean;
    level: number;
}
