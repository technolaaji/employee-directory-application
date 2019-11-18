import express from 'express';
import expertise from '../../models/modelFunctions/expertiseModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await expertise.findOneAndDelete({ title: req.body.title });
        res.json({
            status: 200,
            message: 'success',
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
