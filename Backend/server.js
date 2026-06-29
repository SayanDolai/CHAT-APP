import express from 'express'
import 'dotenv/config'
import {clerkMiddleware} from '@clerk/express'
import connectDB from './src/lib/db.js'
import cors from 'cors'

const app = express() 
const PORT = process.env.PORT
const FRONTEND_URL = process.env.FRONTEND_URL
app.use(express.json()) //data comes from client
app.use(clerkMiddleware()) //check the authentication
app.use(cors({origin:FRONTEND_URL , credentials:true})) // 
app.get("/",(req,res)=>{
    res.status(200).json("ok:true")
})
app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running at : https//localhost:${PORT}`)
}) 