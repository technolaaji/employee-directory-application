import mongoose from 'mongoose';

const employee = new mongoose.Schema({
    description: String,
    email: {
        required: true,
        type: String,
        unique: true,
    },
    firstName: {
        required: true,
        type: String,
    },
    jobTitle: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    location: String,
    middleName: String,
    // company: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'company',
    // },
    picture: String,
    // skills: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'skill',
    // }]
});

export default employee;
