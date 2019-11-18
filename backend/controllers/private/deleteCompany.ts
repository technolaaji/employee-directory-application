import express from 'express';
import company from '../../models/modelFunctions/companyModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await company.findOneAndDelete({ name: req.body.name });
        res.json({
            status: 200,
            message: 'success',
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
