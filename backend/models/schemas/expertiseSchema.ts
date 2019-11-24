import mongoose from 'mongoose';

const expertise = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        unique: true,
    },
});

export default expertise;
