import mongoose from 'mongoose';

const skill = new mongoose.Schema({
    title: {
        required: true,
        type: String,
        unique: true,
    },
});

export default skill;
