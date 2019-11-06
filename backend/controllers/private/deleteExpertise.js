import chalkConfig from '../../utils/chalkConfig';
import expertise from '../../models/modelFunctions/expertiseModelFunction';

export default async (req,res) => {
    try {
        await expertise.findOneAndDelete({title: req.body.title});
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