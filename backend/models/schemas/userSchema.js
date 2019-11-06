import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const user = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    validated: {
        type: Boolean,
        default: false
    }
})

user.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
    });

export default user