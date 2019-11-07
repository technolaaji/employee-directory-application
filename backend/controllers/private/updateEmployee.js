import employee from '../../models/modelFunctions/employeeModelFunction';
import employeeJoi from './privateJoiSchemas/employeeJoiSchema';
import chalkConfig from '../../utils/chalkConfig';


export default async (req,res) => {
    try {
        let validate = await employeeJoi.validateAsync({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            company: req.body.company,
            jobTitle: req.body.jobTitle,
            picture: req.body.picture,
            location: req.body.location,
            skills: req.body.skills
        });
        let employeeData = await employee.findOneAndUpdate({email: req.body.email},validate, {new : true});
        res.json({
            status: 200,
            data: employeeData
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
}