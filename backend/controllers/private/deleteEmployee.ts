import express from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import user from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await user.findOneAndDelete({ email: req.body.email });
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
