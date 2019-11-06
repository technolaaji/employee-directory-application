import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const employee = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'company'
    },
    jobTitle: {
        type: String,
        required: true
    },
    picture: String,
    location: String
})


export default employee