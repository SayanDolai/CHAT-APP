
import mongoose from 'mongoose'
import User from './User.model'
const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    receiverId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text : {
        type : String
    },
    image : {
        type : String
    },
    video : {
        type : String
    },
}, 
{timestamps : true} , // created at and updatesd at
)

const Message = mongoose.model("Message",messageSchema)
export default Message 