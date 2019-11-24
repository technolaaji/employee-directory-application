import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as log from 'loglevel';
import logger from 'morgan';
import authRoute from './routes/auth';
import rootRoute from './routes/index';
import privateRoute from './routes/private';
import publicRoute from './routes/public';
import chalkConfig from './utils/chalkConfig';
import { connectToDB } from './utils/connectToDB';
import PORT from './utils/port';

import * as dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
app.set('view options', { layout: false });
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', rootRoute);
app.use('/public', publicRoute);
app.use('/private', privateRoute);
app.use('/auth', authRoute);

app.listen(PORT, () => {
    log.warn(chalkConfig.success(`Your server is running on port ${PORT}`));
    connectToDB();
});
