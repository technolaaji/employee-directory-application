import { NextFunction, Request, Response } from 'express';
import user from '../models/modelFunctions/userModelFunction';

export default async (req: Request, res: Response, next: NextFunction) => {
    const userData = await user.findOne({ email: res.locals.email });
    const validated = userData;
    if (validated) {
        return next();
    } else {
        return res
            .status(401)
            .send('Unauthorized, you cannot perform this action');
    }
};

// this middleware restricts unverified basic employees from performing any tasks
// they are allowed to perform their own tasks once they get verified
