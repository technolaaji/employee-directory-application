import express from 'express';
import * as log from 'loglevel';
import company from '../../models/modelFunctions/companyModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import companyJoi from './privateJoiSchemas/companyJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await companyJoi.validateAsync({
            country: req.body.country,
            description: req.body.description,
            email: req.body.email,
            image: req.body.image,
            location: req.body.location,
            name: req.body.name,
            phone: req.body.phone,
        });
        const companyData = await company.findOneAndUpdate(
            { email: req.body.email },
            validate,
            { new: true }
        );
        res.json({
            data: companyData,
            status: 200,
        });
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
