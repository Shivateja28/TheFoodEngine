//create router to handle product api reqs
const exp = require("express");
const productApp = exp.Router();
require('dotenv').config()

const expressAsyncHandler = require('express-async-handler')

//to extract body of request object
productApp.use(exp.json())

const verifyToken=require('./middlewares/verifyToken')

//PRODUCT API ROUTES

//get all products
productApp.get('/getproducts', expressAsyncHandler(async(request, response)=>{


    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //read all products
    let products = await productCollectionObject.find().toArray()
    //send response
    response.send({message:"all products", payload:products})
}))


//get product by ID
productApp.get("/getproduct/:type",expressAsyncHandler(async(request, response)=>{

    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //get productId from url param
    let type = request.params.type;
    //get product by id
    let product = await productCollectionObject.find({foodtype:type}).toArray();
    //if product not existed with given Id
    if(product.length == 0){
        response.send({message:"product not existed"})
    }
    //if product existed
    else{
        response.send({message : 'product existed', payload:product})
    }

}))

/*
//to create product
productApp.post('/create-product', (request, response)=>{
    
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //get product obj from req
    let productObj = request.body;
    //insert productObj
    productCollectionObject.insertOne(productObj, (err, result)=>{
        if(err){
            console.log("Err in creating product", err)
        }
        else{
            response.send({message : 'Product created successfully'})
        }
    })
})


//creating product using promise
productApp.post('/create-product', (request, response)=>{
    
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //get product obj from req
    let productObj = request.body;
    //insert productObj
    productCollectionObject.insertOne(productObj)
    .then(result=>response.send({message : 'Product created successfully'}))
    .catch(err=>console.log("Err in creating product", err))
       
})
*/

//create product with async n await
productApp.post('/create-product', expressAsyncHandler(async(request, response, /*next*/)=>{
    /*
    try{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //get product obj from req
    let productObj = request.body;
    //insert productObj
    let result = await productCollectionObject.insertOne(productObj)
    //Send response
    response.send({message : 'Product created successfully'})
    }
    catch(err){
        //handleover err obj to error handling middleware
        next(err)
    }
    */

        //get productCollectionObject
        let productCollectionObject = request.app.get("productCollectionObject")
        //get product obj from req
        let productObj = request.body;
        //insert productObj
        let result = await productCollectionObject.insertOne(productObj)
        //Send response
        response.send({message : 'Product created successfully'})
        

}))


//update product
productApp.put('/update-product', expressAsyncHandler(async(request, response)=>{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //get modified product obj
    let modifiedProduct = request.body;
    //update
    await productCollectionObject.updateOne({productId:modifiedProduct.productId}, {$set:{...modifiedProduct}})
    //send response
    response.send({message:"product modified"})
}))


//delete product by Id
productApp.delete("/remove-product/:id", expressAsyncHandler(async(request, response)=>{

    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //write logic to delete product by its id

}))


//export productApp
module.exports = productApp;