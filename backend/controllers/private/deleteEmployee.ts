import express from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await employee.findOneAndDelete({ email: req.body.email });
        res.json({
            message: 'success',
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
