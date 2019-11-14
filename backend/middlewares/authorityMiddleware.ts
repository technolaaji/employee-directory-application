import user from '../models/modelFunctions/userModelFunction';
import { Response, NextFunction } from 'express'
import { userRequestInterface } from '../interfaces/userRequestInterface';

export default async (req: userRequestInterface, res: Response, next: NextFunction) => {
    const userData = await user.findOne({email: req.email});
    if(userData!.level === 1 && userData!.validated === true){
        next();
    }
    else {
        res.status(401).send("Unauthorized, you cannot perform this action")
    }
}

// this middleware is created for one purpose: no unauthorized users can perform any private tasks
// the reason behind of it is that only admins can perform those specific actions
