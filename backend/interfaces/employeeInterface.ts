import mongoose from 'mongoose';

export interface employeeInterface extends mongoose.Document {
    firstName: String;
    middleName: String;
    lastName: String;
    company: String[];
    jobTitle: String;
    picture: String;
    location: String;
    email: String;
    skills: String[];
    fuzzySearch: Function;
}
