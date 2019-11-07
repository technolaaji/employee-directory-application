import chalkConfig from '../../utils/chalkConfig';
import skill from '../../models/modelFunctions/skillModelFunction';

export default async (req,res) => {
    try {
        await skill.findOneAndDelete({title: req.body.title});
        res.json({
            status: 200,
            message: 'success'
        })
    }
    catch(err){
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
}