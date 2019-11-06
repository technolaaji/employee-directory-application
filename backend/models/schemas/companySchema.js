import mongoose from 'mongoose'

const company = mongoose.Schema({
    name: String,
    location: String,
    country: String,
    phone: Number,
    expertise: [{type: String}]
})

export default company