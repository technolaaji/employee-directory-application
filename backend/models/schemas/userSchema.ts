import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { IUserInt } from '../../interfaces/userInterface';
const user = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
    },
    level: {
        default: 0,
        type: Number,
    },
    password: {
        required: true,
        type: String,
    },
    validated: {
        default: false,
        type: Boolean,
    },
});

user.pre<IUserInt>('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

export default user;

// the level property is used to find if a user is an admin or not
// level zero means not an admin and level one means this user is an admin
// it is easier to query and to check on than setting a property admin = true
// and for outside intruders, incase the api gets hacked or what not they will assume that there are
// more than one level
