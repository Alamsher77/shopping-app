import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'

const userSingInController = async (req,res)=>{
  try{
    const {email,password} = req.body
    if(email == '' || password == ''){
      res.status(200).json({message:'please provide allfields',
        success:false
      })
      return false
    }
    const users = await userModel.findOne({email})
   
    if(!users){
      res.status(200).json({message:"please check your email or password",
        success:false
      })
      
      return false
    }
 const compearPassword = bcrypt.compareSync(password,users.password)
  if(!compearPassword){
      res.status(200).json({
       message:"please check your email or password",
       success:false
        
      })
      console.log(compearPassword)
      return false
    }
    
    res.json({
      success:true,
      message:users
    })
    
  }catch(error){
    console.log(error.message)
    res.json({
      message:error.message,
      error:true,
      success: false
    })
  }
}
export default userSingInController