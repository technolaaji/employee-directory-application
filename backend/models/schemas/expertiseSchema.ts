import mongoose from 'mongoose'

const expertise = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
})

export default expertise