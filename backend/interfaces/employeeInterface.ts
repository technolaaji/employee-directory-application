import mongoose from 'mongoose'

export interface employeeInterface extends mongoose.Document {
    firstName:String,
    middleName: String,
    lastName: String,
    company: Array<String>,
    jobTitle: String,
    picture: String,
    location: String,
    email:String,
    skills: Array<String>
}