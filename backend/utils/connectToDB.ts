import mongoose from 'mongoose';
import chalkConfig from './chalkConfig';

export const connectToDB = () => {
    mongoose.connect(String(process.env.MONGO_URL), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    mongoose.connection.on('connected', () => {
        console.log(
            chalkConfig.success(
                'Mongoose is connected properly to your MongoDB database.'
            )
        );
    });

    mongoose.connection.on('error', err => {
        console.log(
            chalkConfig.error(
                "Mongoose couldn't connect to your MongoDB database"
            )
        );
        console.log(chalkConfig.info(err));
    });

    mongoose.connection.on('disconnected', () => {
        console.log(
            chalkConfig.danger(
                'Mongoose has disconnected from your MongoDB database'
            )
        );
    });
};
