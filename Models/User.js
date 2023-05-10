const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    username:String,
    useremail:String,
    userpassword:String,
    isAdmin:Boolean
})

module.exports=mongoose.model("User",UserSchema)