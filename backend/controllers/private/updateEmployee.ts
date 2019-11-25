import express from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import employeeJoi from './privateJoiSchemas/employeeJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await employeeJoi.validateAsync({
            description: req.body.description,
            email: req.body.email,
            firstName: req.body.firstName,
            jobTitle: req.body.jobTitle,
            lastName: req.body.lastName,
            location: req.body.location,
            middleName: req.body.middleName,
            picture: req.body.picture,
        });
        const employeeData = await employee.findOneAndUpdate(
            { email: req.body.email },
            validate,
            { new: true }
        );
        res.json({
            data: employeeData,
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
