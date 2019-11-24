import mongoose from 'mongoose';

const company = new mongoose.Schema({
    country: String,
    location: String,
    name: {
        required: true,
        type: String,
        unique: true,
    },
    phone: Number,
    // expertise: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'expertise',
    // }]
});

export default company;
