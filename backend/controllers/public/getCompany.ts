import company from '../../models/modelFunctions/companyModelFunction';
import { Request, Response } from 'express'
import chalkConfig from '../../utils/chalkConfig';
import { escapeRegex } from '../../utils/escapeRegex';
import { unionBy } from 'lodash'

export default async (req: Request, res: Response) => {
    try {
        let name = await company.find({name: new RegExp(escapeRegex(req.body.search), 'gi')}).limit(parseInt(req.body.count));
        let location = await company.find({location: new RegExp(escapeRegex(req.body.search), 'gi')}).limit(parseInt(req.body.count));
        let country = await company.find({country: new RegExp(escapeRegex(req.body.search), 'gi')}).limit(parseInt(req.body.count));
        // name is a unique identifier hence it filers them based on name
        let nameAndCountry = unionBy(name,country, "name") ;
        let fullArray = unionBy(nameAndCountry, location, "name") ;
        let data = unionBy(fullArray, "_id");
        res.json(data)
    }
    catch(err){
        console.log(chalkConfig.danger(err))
        res.status(400).json(err);
    }
}