import userModel from '../models/usermodel.js'
const showuser = async (req,res)=>{
  try{ 
    const allusers = await userModel.find()
    res.status(200).json(allusers)
     console.log(allusers)
  }catch(error){
    res.json({
      message : error.message,
      error: true,
      success : false
    })
    console.log("catch message "+error.message)
  }
}
export default showuser

