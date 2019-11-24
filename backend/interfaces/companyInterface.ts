import mongoose from 'mongoose';

export interface ICompanyInterface extends mongoose.Document {
    name: string;
    location: string;
    country: string;
    phone: number;
    expertise: string[];
    fuzzySearch: () => object;
}
