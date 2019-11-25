import express from 'express';
import * as log from 'loglevel';
import likes from '../../models/modelFunctions/likeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import likesJoi from './privateJoiSchemas/likeJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await likes.find({
            liked: res.locals.email,
            type: req.body.type,
        });
        if (validate !== null) {
            return res.json({ payload: validate });
        } else {
            return res.json({ payload: [] });
        }
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
