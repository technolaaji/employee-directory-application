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
            location: req.body.location,
            name: req.body.name,
            phone: req.body.phone,
            picture: req.body.picture,
        });
        await company.create(validate);
        const companyData = await company
            .findOne({ name: validate.name })
            .populate('expertise')
            .exec();
        res.json(companyData);
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
