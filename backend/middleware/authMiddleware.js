const JWT = require("jsonwebtoken");
const UserModel1 = require("../models/Users1");
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

//Protected Routes token base

const requireSignIn = async (req,res,next) => {
    try {
        const token = JWT.verify(req.headers.authorization, JWT_SECRET);
        req.user = token;
        console.log( "Decoded Token :" ,token);
        next();
    } catch (error) {
        console.log("Token verification error:", error.message);
        return res.status(401).send({
            success: false,
        message: 'Unauthorized Access'})
    }
    
}
const isAdmin = async(req,res,next) => {
    try {
        const user =await UserModel1.findById(req.user._id)
        if(user.UserType !== 1)
        {
            return res.status(401).send({
                success:false,
                message: 'UnAuthorized Access'
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {requireSignIn,isAdmin}






