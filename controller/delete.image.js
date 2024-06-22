import fs from 'fs'
import productModel from '../models/product.model.js'
// Get the path of the image to delete
const imageDelete = async (req,res)=>{
   const findUserImage = await productModel.findOne({_id:req.body._id}) 
  
   const responseImage = findUserImage.image.slice(28)  
 
  
  const imagePath = `./uploads/image/${responseImage}`;

// Unlink the image
fs.unlink(imagePath, async (err) => {
  if (err) {
    console.error(err);
    res.send(err)
    return false;
  }
await productModel.findOneAndDelete({_id:req.body._id})
  res.json({
    success:true,
    message:'product deleted successfully'
  })
  console.log('image deleted')
  
  
});
}
export default imageDelete