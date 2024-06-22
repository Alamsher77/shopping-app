import express from 'express'
import multer from 'multer'
import path from 'path'
 import userSinigupController from '../controller/singup.js'
 import userSingInController from '../controller/singin.js'
 import showuser from '../controller/showuser.js'
 import imageDelete from '../controller/delete.image.js'
import {upload,response} from '../controller/upload.image.js'
import  {addProduct,showProduct} from '../controller/product.add.js'
 import {productCategry,showProductCategry,removeCategry} from '../controller/product.categry.js'
const router = express.Router()
 
// upload image api
 router.post('/uploadImage',upload.single('product'),response)
 router.delete('/imageDelete',imageDelete)
// // user singin and singup api
 router.post('/singup',userSinigupController)
 router.post('/singin',userSingInController)
 router.get('/showuser',showuser)

// addproduct api 
router.post('/addproduct', addProduct)
// showProduct api
 router.get('/showProduct',showProduct)
//productcategry api
 router.post('/productcategry',productCategry)
// // shwo productcategry api
 router.get('/showproductcategry',showProductCategry)
 router.delete('/removeCategry',removeCategry)

export default router