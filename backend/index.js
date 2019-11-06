import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser';


import rootRoute from './routes/index';
import publicRoute from './routes/public';
import privateRoute from './routes/private';
import authRoute from './routes/auth';

import chalkConfig from './utils/chalkConfig';
import { connectToDB } from './utils/connectToDB';


let app = express();
app.use(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', rootRoute);
app.use('/public', publicRoute);
app.use('/private', privateRoute);
app.use('/auth', authRoute);

app.listen(3000,() => {
    console.log(chalkConfig.success("Your server is running on port 3000"))
    connectToDB()
})