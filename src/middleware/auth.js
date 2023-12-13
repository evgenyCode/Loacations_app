import  Jwt  from "jsonwebtoken";


const authUser = (req, res, next)=>{
    const token = req.headers.authorization;
   

    if(!token){
        return res.status(401).json({message: "Bad auth!!!"})
    }

    Jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if(err){
            return res.status(401).json({message: "Bad auth!!!"})
        }

        req.body.userID = decoded.id
        return next();
    })

   

}

export default authUser