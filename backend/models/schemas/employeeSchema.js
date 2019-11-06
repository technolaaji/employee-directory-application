import mongoose from 'mongoose';

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
    location: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})


export default employee 