import bcrypt from 'bcrypt';
import express from 'express';
import { userRequestInterface } from '../../interfaces/userRequestInterface';
import employeeModel from '../../models/modelFunctions/employeeModelFunction';
import userModel from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import userJoi from './authJoiSchema/authJoiSchema';
export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await userJoi.validateAsync({
            email: req.body.email,
            password: req.body.password,
        });

        await userModel.findOneAndUpdate(
            { email: res.locals.email },
            {
                email: validate.email,
                password: bcrypt.hashSync(req.body.password, 10),
            }
        );
        await employeeModel.findOneAndUpdate(
            { email: res.locals.email },
            {
                email: validate.email,
            }
        );
        return res.json({
            status: 200,
            message: 'success',
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};

// this function updates the user's email and if he/she is also an employee it also updates it
// the main reason why the user is not integrated to the employee is due to the fact that
// an employee is a user but there are users that are not employees
