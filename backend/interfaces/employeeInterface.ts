import mongoose from 'mongoose';

export interface IEmployeeInterface extends mongoose.Document {
    firstName: string;
    middleName: string;
    lastName: string;
    company: string[];
    jobTitle: string;
    picture: string;
    location: string;
    email: string;
    skills: string[];
}
