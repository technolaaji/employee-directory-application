import express from 'express';
import * as log from 'loglevel';
import company from '../../models/modelFunctions/companyModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await company.findOneAndDelete({ name: req.body.name });
        res.json({
            message: 'success',
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
