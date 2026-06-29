
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
        type : string
    },
    image : {
        type : string
    },
    video : {
        type : string
    },
}, 
{timeStamps : true} , // created at and updatesd at
)

const Message = mongoose.model("Message",messageSchema)
export default Message 