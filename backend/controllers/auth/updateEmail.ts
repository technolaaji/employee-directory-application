import express from 'express';
import jwt from 'jsonwebtoken';
import * as log from 'loglevel';
import userModel from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import userJoi from './authJoiSchema/authJoiSchema';
export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await userJoi.validateAsync({
            email: req.body.email,
        });

        await userModel.findOneAndUpdate(
            { email: res.locals.email },
            {
                email: validate.email,
            }
        );
        jwt.sign(
            { email: validate.email },
            String(process.env.JWT_SECRET),
            {
                expiresIn: '1d',
            },
            async (errin, token) => {
                return res.json({
                    email: req.body.email,
                    status: 200,
                    token,
                });
            }
        );
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
