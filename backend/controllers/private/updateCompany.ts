import company from '../../models/modelFunctions/companyModelFunction';
import companyJoi from './privateJoiSchemas/companyJoiSchema';
import chalkConfig from '../../utils/chalkConfig';
import express from 'express'

export default async (req: express.Request, res: express.Response) => {
    try {
        let validate = await companyJoi.validateAsync({
            name: req.body.name,
            location: req.body.location,
            country: req.body.country,
            phone: req.body.phone,
            expertise: req.body.expertise
        });
        let companyData = await company.findOneAndUpdate({name: req.body.refName}, validate, {new : true});
        res.json({
            status: 200,
            data: companyData
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
}