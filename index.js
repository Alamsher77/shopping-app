import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import path  from 'path'
import mongoDb from './mongodb/mongodb.js'
import router from './route/index.js'
dotenv.config()   
const app = express()
 app.use(express.json()) 
 app.use(cors())
 app.use('/api',router)
 app.use('/image',express.static('uploads/image'))
 
const PORT = process.env.PORT ||4000 

mongoDb().then(()=>{
    app.listen(PORT,()=>{
  console.log(`server is running port ${PORT}`)
})
})

