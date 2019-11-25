import express from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await employee.findOne({
            _id: req.body.id,
        });
        if (validate !== null) {
            return res.json({ payload: validate });
        } else {
            return res.json({ payload: {} });
        }
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
