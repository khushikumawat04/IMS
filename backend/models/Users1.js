const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    UserType: {
        type : "number",
        default : 0,
    },
    phone: Number,
    course: String,
    address: String,
})
 


const UserModel1=  mongoose.model("users1",UserSchema)
module.exports = UserModel1;