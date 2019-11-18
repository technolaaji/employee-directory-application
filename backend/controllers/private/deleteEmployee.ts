import express from 'express';
import employee from '../../models/modelFunctions/employeeModelFunction';
import user from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await user.findOneAndDelete({ email: req.body.email });
        await employee.findOneAndDelete({ email: req.body.email });
        res.json({
            status: 200,
            message: 'success',
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
