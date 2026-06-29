import mongoose from "mongoose"


const connectDB = async ()=>{
    try{
        const mongoUri = process.env.MONGODB_URI
        if(!mongoUri) throw new Error(`MONGODB URL is required from lib/db.js`)
        await mongoose.connect(mongoUri)
        console.log("DataBase Connected")
    }catch(error){
        console.log(`error from lib/db.js : ${error}`)
        process.exit(1) //failed
    }
    
}

export default connectDB