import { Request, Response } from 'express';
import { unionBy } from 'lodash';
import company from '../../models/modelFunctions/companyModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import { escapeRegex } from '../../utils/escapeRegex';

export default async (req: Request, res: Response) => {
    try {
        const name = await company
            .find({ name: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        const location = await company
            .find({ location: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        const country = await company
            .find({ country: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        // name is a unique identifier hence it filers them based on name
        const nameAndCountry = unionBy(name, country, 'name');
        const fullArray = unionBy(nameAndCountry, location, 'name');
        const data = unionBy(fullArray, '_id');
        res.json(data);
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
