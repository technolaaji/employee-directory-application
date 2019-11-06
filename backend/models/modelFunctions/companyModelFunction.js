import mongoose from 'mongoose'
import companySchema from '../schemas/companySchema'

export default mongoose.model('company', companySchema);