import express from 'express';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import employeeJoi from './privateJoiSchemas/employeeJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await employeeJoi.validateAsync({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            company: req.body.company,
            jobTitle: req.body.jobTitle,
            picture: req.body.picture,
            location: req.body.location,
            skills: req.body.skills,
        });
        const employeeData = await employee.findOneAndUpdate(
            { email: req.body.email },
            validate,
            { new: true }
        );
        res.json({
            status: 200,
            data: employeeData,
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
