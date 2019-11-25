import bcrypt from 'bcrypt';
import express from 'express';
import * as log from 'loglevel';
import userModel from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import userJoi from './authJoiSchema/authJoiSchema';
export default async (req: express.Request, res: express.Response) => {
    try {
        await userJoi.validateAsync({
            password: req.body.password,
        });

        await userModel.findOneAndUpdate(
            { email: res.locals.email },
            {
                password: bcrypt.hashSync(req.body.password, 10),
            }
        );
        return res.json({
            message: 'success',
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
