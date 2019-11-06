import mongoose from 'mongoose'

const company = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: String,
    country: String,
    phone: Number,
    expertise: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'expertise'
    }]
})

export default company