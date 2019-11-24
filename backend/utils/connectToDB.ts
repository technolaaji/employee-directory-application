import * as log from 'loglevel';
import mongoose from 'mongoose';
import chalkConfig from './chalkConfig';

export const connectToDB = () => {
    mongoose.connect(String(process.env.MONGO_URL), {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        log.warn(
            chalkConfig.success(
                'Mongoose is connected properly to your MongoDB database.'
            )
        );
    });

    mongoose.connection.on('error', err => {
        log.warn(
            chalkConfig.error(
                "Mongoose couldn't connect to your MongoDB database"
            )
        );
        log.warn(chalkConfig.info(err));
    });

    mongoose.connection.on('disconnected', () => {
        log.warn(
            chalkConfig.danger(
                'Mongoose has disconnected from your MongoDB database'
            )
        );
    });
};
