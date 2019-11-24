import express from 'express';
import * as log from 'loglevel';
import user from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import userJoi from './authJoiSchema/authJoiSchema';
export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await userJoi.validateAsync({
            email: req.body.email,
            password: req.body.password,
        });
        await user.create(validate);
        res.json({
            message: 'user created successfully',
        });
        // add email verification
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.json(err);
    }
};
