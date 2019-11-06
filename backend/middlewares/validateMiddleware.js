import jwt from 'jsonwebtoken';
import { JWT_SECRET } from 'babel-dotenv' 

export default async (req,res,next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token) return res.status(401).send("Access denied. No token provided.");
    try {
        let tokenPart = token.split(' ')[1];
        const decode = jwt.verify(tokenPart,JWT_SECRET);
        req.user = decode;
        next();
    }
    catch(err){
        res.status(400).json({message: "Invalid token"})
    }
}