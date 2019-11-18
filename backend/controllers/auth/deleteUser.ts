import express from 'express';
import employeeModel from '../../models/modelFunctions/employeeModelFunction';
import userModel from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
export default async (req: express.Request, res: express.Response) => {
    try {
        await userModel.findOneAndDelete({ email: req.body.email });
        await employeeModel.findOneAndDelete({ email: req.body.email });
        res.json({
            status: 200,
            message: 'success',
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};

// the main reason why it deletes also the employee data as well since
// a user can be and not be an employee
// if a user is not an employee then this additional function will do nothing
// but it was created for general usecases
