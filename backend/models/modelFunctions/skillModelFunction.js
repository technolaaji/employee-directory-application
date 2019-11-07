import mongoose from 'mongoose';
import skillSchema from '../schemas/skillsSchema';

export default mongoose.model('skill', skillSchema)