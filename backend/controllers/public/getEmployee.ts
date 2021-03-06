import { Request, Response } from 'express';
import * as log from 'loglevel';
import employee from '../../models/modelFunctions/employeeModelFunction';
import chalkConfig from '../../utils/chalkConfig';

export default async (req: Request, res: Response) => {
    try {
        // const firstName = await employee
        //     .find({ firstName: new RegExp(escapeRegex(req.body.search), 'gi') })
        //     .limit(parseInt(req.body.count));
        // const lastName = await employee
        //     .find({ lastName: new RegExp(escapeRegex(req.body.search), 'gi') })
        //     .limit(parseInt(req.body.count));
        // const jobTitle = await employee
        //     .find({ jobTitle: new RegExp(escapeRegex(req.body.search), 'gi') })
        //     .limit(parseInt(req.body.count));
        // const location = await employee
        //     .find({ location: new RegExp(escapeRegex(req.body.search), 'gi') })
        //     .limit(parseInt(req.body.count));
        // // email is a unique identifier hence it is used
        // const firstAndLast = unionBy(firstName, lastName, 'email');
        // const nameAndJob = unionBy(firstAndLast, jobTitle, 'email');
        // const data = unionBy(nameAndJob, location, 'email');
        const query = {
            $or: [
                { firstName: { $regex: req.body.search, $options: 'i' } },
                { lastName: { $regex: req.body.search, $options: 'i' } },
                { jobTitle: { $regex: req.body.search, $options: 'i' } },
                { location: { $regex: req.body.search, $options: 'i' } },
            ],
        };
        const data = await employee.find(query).limit(req.body.count);
        res.json(data);
    } catch (err) {
        log.warn(chalkConfig.danger(err));
        res.status(400).json(err);
    }
};
