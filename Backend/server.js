import express from 'express'
import 'dotenv/config'
import clerk from 'clerk/express'

const app = express() 

app.listen(process.env.PORT,()=>{})