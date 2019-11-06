import user from '../../models/modelFunctions/userModelFunction';
import userJoi from './authJoiSchema/authJoiSchema';
import chalkConfig from '../../utils/chalkConfig';

export default async (req,res) => {
    try {
        const validate = await userJoi.validateAsync({
            email: req.body.email,
            password: req.body.password
        });
        let userData = await user.create(validate)
        res.json({
            message: 'user created successfully'
        })
        // add email verification
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.json(err)
    }
}