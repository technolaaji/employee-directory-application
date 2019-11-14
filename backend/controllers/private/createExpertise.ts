import expertise from '../../models/modelFunctions/expertiseModelFunction';
import expertiseJoi from './privateJoiSchemas/expertiseJoiSchema';
import chalkConfig from '../../utils/chalkConfig';
import express from 'express'

export default async(req: express.Request, res: express.Response) => {
    try {
        const validate = await expertiseJoi.validateAsync({
            title: req.body.title
        });
        let expertiseData = await expertise.create(validate);
        res.json(expertiseData)
    }
    catch(err){
        console.log(chalkConfig.danger(err));
        res.status(400).json(err)
    }
}