import mongoose from 'mongoose';

const company = new mongoose.Schema({
    country: String,
    description: String,
    email: {
        required: true,
        type: String,
        unique: true,
    },
    location: String,
    name: String,
    phone: Number,
    picture: String,
    // expertise: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'expertise',
    // }]
});

export default company;
