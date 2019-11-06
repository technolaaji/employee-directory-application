import mongoose from 'mongoose'
import expertiseSchema from '../schemas/expertiseSchema';

export default mongoose.model('expertise', expertiseSchema);