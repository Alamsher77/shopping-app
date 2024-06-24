import multer from 'multer'
import path from 'path'
 
 const storage = multer.diskStorage({
  destination:'./uploads/image',
  filename: (req,file,cb)=>{
     cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})
 
const upload = multer({storage}) 
// app.post('/uploadImage',upload,

const response = (req,res)=>{
  res.json({
    success:true,
    image_url:`https://shopping-app-production.up.railway.app/image${req.file.filename}`
  })
}

 
  export {upload,response}
