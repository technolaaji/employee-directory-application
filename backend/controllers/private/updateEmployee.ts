import express from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import employeeJoi from './privateJoiSchemas/employeeJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await employeeJoi.validateAsync({
            country: req.body.country,
            description: req.body.description,
            email: req.body.email,
            image: req.body.image,
            location: req.body.location,
            name: req.body.name,
            phone: req.body.phone,
        });
        const employeeData = await employee.findOneAndUpdate(
            { email: req.body.refEmail },
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
