import express from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import employeeJoi from './privateJoiSchemas/employeeJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await employeeJoi.validateAsync({
            email: req.body.email,
            firstName: req.body.firstName,
            jobTitle: req.body.jobTitle,
            lastName: req.body.lastName,
            location: req.body.location,
            middleName: req.body.middleName,
            picture: req.body.picture,
        });
        await employee.create(validate);
        const employeeData = await employee
            .findOne({ email: validate.email })
            .exec();
        res.json(employeeData);
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
