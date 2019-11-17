import employee from '../../models/modelFunctions/employeeModelFunction';
import { Request, Response } from 'express'
import chalkConfig from '../../utils/chalkConfig';
import { escapeRegex } from '../../utils/escapeRegex';
import { unionBy } from 'lodash'

export default async (req: Request, res: Response) => {
    try {
        let firstName = await employee.find({firstName: new RegExp(escapeRegex(req.body.search),'gi')}).limit(parseInt(req.body.count));
        let lastName = await employee.find({lastName: new RegExp(escapeRegex(req.body.search),'gi')}).limit(parseInt(req.body.count));
        let jobTitle = await employee.find({jobTitle: new RegExp(escapeRegex(req.body.search),'gi')}).limit(parseInt(req.body.count));
        let location = await employee.find({location: new RegExp(escapeRegex(req.body.search),'gi')}).limit(parseInt(req.body.count));
        // email is a unique identifier hence it is used
        let firstAndLast = unionBy(firstName,lastName,"email");
        let nameAndJob = unionBy(firstAndLast,jobTitle,"email");
        let data = unionBy(nameAndJob, location, "email");
        res.json(data);
    }
    catch(err){
        console.log(chalkConfig.danger(err));
        res.status(400).json(err);
    }
}