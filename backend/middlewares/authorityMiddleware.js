import user from '../models/modelFunctions/userModelFunction';


export default async (req,res,next) => {
    const userData = await user.findOne({email: req.user.email});
    let {level, validated } = userData;
    if(level === 1 && validated === true){
        next();
    }
    else {
        res.status(401).send("Unauthorized, you cannot perform this action")
    }
}

// this middleware is created for one purpose: no unauthorized users can perform any private tasks
// the reason behind of it is that only admins can perform those specific actions
