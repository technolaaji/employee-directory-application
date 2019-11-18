import mongoose from 'mongoose';

export interface userInt extends mongoose.Document {
    email: String;
    password: String;
    validated: Boolean;
    level: Number;
}
