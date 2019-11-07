import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const user = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    validated: {
        type: Boolean,
        default: false
    },
    level: {
        type: Number,
        default: 0
    }
})

user.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
    });

export default user

// the level property is used to find if a user is an admin or not
// level zero means not an admin and level one means this user is an admin
// it is easier to query and to check on than setting a property admin = true
// and for outside intruders, incase the api gets hacked or what not they will assume that there are
// more than one level