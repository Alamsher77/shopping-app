import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
const userSinigupController = async (req,res)=>{
  try{
    
    const {email,password,name,profilePic} = req.body
     
   if(email == '' || name == '' || password == ''){
    res.status(200).json({
      message:"please provide allfields",
      success:false
    })
    return false
    } 
     
    const allrady_user = await userModel.findOne({email})
    if(allrady_user){
      res.status(200).json({
        message:"users already exist",
        success:false
      })
      return false
    }
    
   
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password,salt)
  
    
    const userData = new userModel({
      name,
      email,
      password:hashPassword,
      profilePic,
    })
    
  await userData.save()
  console.log(userData)
  res.status(200).json({
    message:userData,
    success:true
  })
    
    
  }catch(error){
    res.json(error.message)
    console.log("catch message "+error.message)
  }
}
export default userSinigupController

