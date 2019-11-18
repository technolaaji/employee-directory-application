import express from 'express';
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
            status: 200,
            expertise: expertiseData,
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.json(400).json(err);
    }
};
