import express from 'express';
import * as log from 'loglevel';
import likes from '../../models/modelFunctions/likeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import likesJoi from './privateJoiSchemas/likeJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const data = await likesJoi.validate({
            liked: res.locals.email,
            type: req.body.type,
            who: req.body.who,
        });
        const validate = await likes.findOne({
            liked: res.locals.email,
            type: req.body.type,
            who: req.body.who,
        });
        if (validate !== null) {
            await likes.deleteOne({
                liked: res.locals.email,
                type: req.body.type,
                who: req.body.who,
            });
            return res.json({ message: 'unliked' });
        } else {
            return res
                .status(400)
                .json({ message: "you've unliked it already" });
        }
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
