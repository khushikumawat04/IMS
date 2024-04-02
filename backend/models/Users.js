const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    First: String,
    Last: String,
    Address: String,
    Course: String,
},
{timestamps: true}
)


const UserModel=  mongoose.model("users",UserSchema)
module.exports = UserModel;