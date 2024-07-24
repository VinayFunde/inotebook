var jwt = require("jsonwebtoken");
const JWT_SECRET = "vinayisgoof$boy";

const fetchuser= (req, res, next)=>{
    
    //Get the user  from JWT token  and addd id   to req  objeect\
    const token=  req.header('auto-token');
    if(!token){
        res.status(401).send({error:"please authhenticate  using  a valide token"})
    }  
    try{
        const  data  =jwt.verify(token,JWT_SECRET);
        req.user= data.user;
        next();
    }catch(error){
        res.status(401).send({error:"please authhenticate  using  a valide token"})
    }
    
}


module.exports =fetchuser;