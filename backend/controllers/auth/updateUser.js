import userJoi from './authJoiSchema/authJoiSchema'
import chalkConfig from '../../utils/chalkConfig';
import userModel from '../../models/modelFunctions/userModelFunction';
import employeeModel from '../../models/modelFunctions/employeeModelFunction';
import bcrypt from 'bcrypt'

export default async(req,res) => {
    try {
        let validate = await userJoi.validateAsync({
            email: req.body.email,
            password: req.body.password
        });

        await userModel.findOneAndUpdate({email: req.user.email}, {
            email: validate.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        await employeeModel.findOneAndUpdate({email: req.user.email}, {
            email: validate.email
        })
        res.json({
            status: 200,
            message: 'success'
        })
    }
    catch (err) {
        console.log(chalkConfig.danger(err))
        res.status(400).json(err)
    }
} 

// this function updates the user's email and if he/she is also an employee it also updates it
// the main reason why the user is not integrated to the employee is due to the fact that 
// an employee is a user but there are users that are not employees