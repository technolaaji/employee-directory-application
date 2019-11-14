import expertiseJoi from './privateJoiSchemas/expertiseJoiSchema'
import chalkConfig from '../../utils/chalkConfig';
import expertise from '../../models/modelFunctions/expertiseModelFunction';
import express from 'express'

export default async (req: express.Request, res: express.Response) => {
    try {
        let validate = await expertiseJoi.validateAsync({
            title: req.body.title
        });
        let expertiseData = await expertise.findOneAndUpdate({title: req.body.oldTitle}, validate, {new : true});
        res.json({
            status: 200,
            expertise: expertiseData
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.json(400).json(err)
    }
}