import user from '../../models/modelFunctions/userModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import express from 'express'

export default async (req: express.Request,res: express.Response) => {
    try {
        await user.findOneAndUpdate({email: req.body.email},{
            level: 0
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