import skill from '../../models/modelFunctions/skillModelFunction';
import skillJoi from './privateJoiSchemas/skillJoiSchema'
import chalkConfig from '../../utils/chalkConfig';


export default async(req,res) => {
    try {
        const validate = await skillJoi.validateAsync({
            title: req.body.title
        });
        let skillData = await skill.create(validate);
        res.json(skillData)
    }
    catch(err){
        console.log(chalkConfig.danger(err));
        res.status(400).json(err)
    }
}