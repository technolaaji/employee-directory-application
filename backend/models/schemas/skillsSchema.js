import mongoose from 'mongoose'

const skill = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
})

export default skill