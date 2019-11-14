import mongoose from 'mongoose'

const skill = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
})

export default skill