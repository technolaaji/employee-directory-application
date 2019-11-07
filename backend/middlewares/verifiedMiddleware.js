import user from '../models/modelFunctions/userModelFunction';


export default async (req,res,next) => {
    const userData = await user.findOne({email: req.user.email});
    let {validated } = userData;
    if(validated === true){
        next();
    }
    else {
        res.status(401).send("Unauthorized, you cannot perform this action")
    }
}

// this middleware restricts unverified basic employees from performing any tasks 
// they are allowed to perform their own tasks once they get verified