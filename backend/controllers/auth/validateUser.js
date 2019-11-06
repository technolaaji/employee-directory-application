import userModel from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from 'babel-dotenv' 

export default async (req,res) => {
    try {
        await userModel.findOne({email: req.body.email}, async (err,user) => {
            if(!user){
                res.status(400).json({message: 'user not found'})
            }
            else {
                await bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if(!result){
                        console.log(chalkConfig.danger(err))
                        res.status(400).json(err)
                    }
                    else {
                        jwt.sign({ email: user.email }, JWT_SECRET, async (err, token) => {
                            return res.json({
                                status: 200,
                                email: req.body.email,
                                token: token
                            })
                          });
                    } 
                } )
            }
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.status(400).json(err)
    }
}