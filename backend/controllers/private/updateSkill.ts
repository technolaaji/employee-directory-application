import chalkConfig from '../../utils/chalkConfig';
import skill from '../../models/modelFunctions/skillModelFunction';
import skillJoi from './privateJoiSchemas/skillJoiSchema';
import express from 'express'

export default async (req: express.Request, res: express.Response) => {
    try {
        let validate = await skillJoi.validateAsync({
            title: req.body.title
        });
        let skillData = await skill.findOneAndUpdate({title: req.body.oldTitle}, validate, {new : true});
        res.json({
            status: 200,
            expertise: skillData
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.json(400).json(err)
    }
}