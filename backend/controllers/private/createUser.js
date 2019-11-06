import employee from '../../models/modelFunctions/employeeModelFunction';
import employeeJoi from './privateJoiSchemas/employeeJoiSchema';
import chalkConfig from '../../utils/chalkConfig';

export default async (req,res) => {
    try {
        const validate = await employeeJoi.validateAsync({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            company: req.body.company,
            jobTitle: req.body.jobTitle,
            picture: req.body.picture,
            location: req.body.location
        })
        let employeeData = await employee.create(validate)
        employeeData = await employee.findOne({email: validate.email}).populate('company').exec()
        res.json(employeeData)
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.status(400).json(err)
    }
}