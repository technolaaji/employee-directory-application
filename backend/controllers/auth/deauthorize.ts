import express from 'express';
import * as log from 'loglevel';
import user from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';

export default async (req: express.Request, res: express.Response) => {
    try {
        await user.findOneAndUpdate(
            { email: req.body.email },
            {
                level: 0,
            }
        );
        res.json({
            message: 'success',
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
