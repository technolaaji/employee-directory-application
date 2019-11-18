import express from 'express';
import company from '../../models/modelFunctions/companyModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import companyJoi from './privateJoiSchemas/companyJoiSchema';
export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await companyJoi.validateAsync({
            name: req.body.name,
            location: req.body.location,
            country: req.body.country,
            phone: req.body.phone,
        });
        await company.create(validate);
        const companyData = await company
            .findOne({ name: validate.name })
            .populate('expertise')
            .exec();
        res.json(companyData);
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
