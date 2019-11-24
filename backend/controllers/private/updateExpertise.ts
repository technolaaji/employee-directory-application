import express from 'express';
import * as log from 'loglevel';
import expertise from '../../models/modelFunctions/expertiseModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import expertiseJoi from './privateJoiSchemas/expertiseJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await expertiseJoi.validateAsync({
            title: req.body.title,
        });
        const expertiseData = await expertise.findOneAndUpdate(
            { title: req.body.oldTitle },
            validate,
            { new: true }
        );
        res.json({
            expertise: expertiseData,
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.json(400).json(err);
    }
};
