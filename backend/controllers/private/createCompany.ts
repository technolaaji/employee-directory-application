import company from '../../models/modelFunctions/companyModelFunction';
import companyJoi from './privateJoiSchemas/companyJoiSchema';
import chalkConfig from '../../utils/chalkConfig';
import express from 'express'
export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await companyJoi.validateAsync({
            name: req.body.name,
            location: req.body.location,
            country: req.body.country,
            phone: req.body.phone,
            expertise: req.body.expertise
        })
        await company.create(validate)
        let companyData = await company.findOne({name: validate.name}).populate('expertise').exec()
        res.json(companyData)
    }
    catch(err) {
        console.log(chalkConfig.danger(err))
        res.status(400).json(err)
    }
}

