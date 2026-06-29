import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    clerkId : {
        type:string,
        required : true,
        unique : true ,
    },
    email : {
        type:string,
        required : true,
        unique : true ,
    },
    username : {
        type : string ,
        required : true ,
    },
    profilePicture : {
        type : string ,
        default : ""
    },

}, 
{timeStamps : true} , // created at and updatesd at
)

const User = mongoose.model("User",userSchema)
export default User 