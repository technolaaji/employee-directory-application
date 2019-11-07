import chalkConfig from '../../utils/chalkConfig';
import skill from '../../models/modelFunctions/skillModelFunction';
import skillJoi from './privateJoiSchemas/skillJoiSchema';


export default async (req,res) => {
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