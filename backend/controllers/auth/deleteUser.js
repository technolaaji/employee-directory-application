import chalkConfig from '../../utils/chalkConfig';
import userModel from '../../models/modelFunctions/userModelFunction';
import employeeModel from '../../models/modelFunctions/employeeModelFunction';

export default async (req,res) => {
    try {
        await userModel.findOneAndDelete({email: req.body.email});
        await employeeModel.findOneAndDelete({email: req.body.email});
        res.json({
            status: 200,
            message: "success"
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.status(400).json(err)
    }
}

// the main reason why it deletes also the employee data as well since 
// a user can be and not be an employee
// if a user is not an employee then this additional function will do nothing
// but it was created for general usecases 