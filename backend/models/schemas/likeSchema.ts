import mongoose from 'mongoose';

const likes = new mongoose.Schema({
    liked: String,
    type: String,
    who: String,
});

export default likes;
