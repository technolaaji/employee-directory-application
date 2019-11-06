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

        await userModel.findOneAndUpdate({email: req.body.oldEmail}, {
            email: validate.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        await employeeModel.findOneAndUpdate({email: req.body.oldEmail}, {
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