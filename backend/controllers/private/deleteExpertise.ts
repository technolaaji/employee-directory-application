import express from 'express';
import * as log from 'loglevel';
import expertise from '../../models/modelFunctions/expertiseModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await expertise.findOneAndDelete({ title: req.body.title });
        res.json({
            message: 'success',
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
