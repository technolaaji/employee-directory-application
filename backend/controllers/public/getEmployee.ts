import { Request, Response } from 'express';
import { unionBy } from 'lodash';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';
import { escapeRegex } from '../../utils/escapeRegex';

export default async (req: Request, res: Response) => {
    try {
        const firstName = await employee
            .find({ firstName: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        const lastName = await employee
            .find({ lastName: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        const jobTitle = await employee
            .find({ jobTitle: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        const location = await employee
            .find({ location: new RegExp(escapeRegex(req.body.search), 'gi') })
            .limit(parseInt(req.body.count));
        // email is a unique identifier hence it is used
        const firstAndLast = unionBy(firstName, lastName, 'email');
        const nameAndJob = unionBy(firstAndLast, jobTitle, 'email');
        const data = unionBy(nameAndJob, location, 'email');
        res.json(data);
    } catch (err) {
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
