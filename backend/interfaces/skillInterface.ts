import mongoose from 'mongoose';

export interface ISkillInterface extends mongoose.Document {
    title: string;
}
