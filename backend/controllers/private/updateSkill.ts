import express from 'express';
import skill from '../../models/modelFunctions/skillModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import skillJoi from './privateJoiSchemas/skillJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await skillJoi.validateAsync({
            title: req.body.title,
        });
        const skillData = await skill.findOneAndUpdate(
            { title: req.body.oldTitle },
            validate,
            { new: true }
        );
        res.json({
            status: 200,
            expertise: skillData,
        });
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.json(400).json(err);
    }
};
