import mongoose from 'mongoose'

export interface skillInterface extends mongoose.Document {
    title: String
}