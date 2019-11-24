import express from 'express';
import * as log from 'loglevel';
import skill from '../../models/modelFunctions/skillModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import skillJoi from './privateJoiSchemas/skillJoiSchema';

export default async (req: express.Request, res: express.Response) => {
    try {
        const validate = await skillJoi.validateAsync({
            title: req.body.title,
        });
        const skillData = await skill.create(validate);
        res.json(skillData);
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
