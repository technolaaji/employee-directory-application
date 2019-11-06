import company from '../../models/modelFunctions/companyModelFunction';
import companyJoi from './privateJoiSchemas/companyJoiSchema';
import chalkConfig from '../../utils/chalkConfig';
export default async (req,res) => {
    try {
        const validate = await companyJoi.validateAsync({
            name: req.body.name,
            location: req.body.location,
            country: req.body.country,
            phone: req.body.phone,
            expertise: req.body.expertise
        })
        const companyData = await company.create(validate)
        res.json(companyData)
    }
    catch(err) {
        console.log(chalkConfig.danger(err))
        res.status(400).json(err)
    }
}