import mongoose from 'mongoose'

export interface companyInterface extends mongoose.Document{
    name: String,
    location: String,
    country: String,
    phone: Number,
    expertise: Array<String>
}