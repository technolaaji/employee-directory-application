import user from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';


export default async (req,res) => {
    try {
        await user.findOneAndUpdate({email: req.body.email},{
            level: 1
        });
        res.json({
            status: 200,
            message: "success"
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.status(400).json(err);
    }
}