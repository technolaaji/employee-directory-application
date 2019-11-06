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