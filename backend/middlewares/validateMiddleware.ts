import jwt from 'jsonwebtoken';
import {Response, NextFunction} from 'express'
import { userRequestInterface } from '../interfaces/userRequestInterface';

export default async (req: userRequestInterface, res: Response, next: NextFunction) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) return res.status(401).send("Access denied.");
    try {
        let tokenPart = (token as String).split(' ')[1];
        const decode = jwt.verify(tokenPart,String(process.env.JWT_SECRET));
        let userMail = Object(decode).email;
        req.email = String(userMail);

        next();
    }
    catch(err){
        res.status(400).json({message: "Invalid token"})
    }
}

// decode returns back the decoded jwt token, mainly holds the email
// if you wish to use the email, it adds to the req in all in the private section
// a user block that contains user's email so you can call it by writing 'req.user.email'
// it will be available to all the routes in private because this is a middleware function and
// it passes any data to the other routes