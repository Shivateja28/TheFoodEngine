//create router to handle product api reqs
const exp = require("express");
const cartApp = exp.Router();

const expressAsyncHandler = require('express-async-handler')

//to extract body of request object
cartApp.use(exp.json())
//PRODUCT API ROUTES

//get all products
cartApp.get('/getcartproducts/:id', expressAsyncHandler(async(request, response)=>{


    //get productCollectionObject
    let cartCollectionObject = request.app.get("cartCollectionObject")
    //read all products
    let id = request.params.id;
    let products = await cartCollectionObject.find({username:id}).toArray()
    //send response
    response.send({message:"all products", payload:products})
}))


cartApp.get('/getcartcount/:id', expressAsyncHandler(async(request, response)=>{


    //get productCollectionObject
    let cartCollectionObject = request.app.get("cartCollectionObject")
    //read all products
    let id = request.params.id
    let products = await cartCollectionObject.find({username:id}).toArray()
    //send response
    response.send({len:products.length})
}))


/*
//to create product
cartApp.post('/create-product', (request, response)=>{
    
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
cartApp.post('/create-product', (request, response)=>{
    
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
cartApp.post('/add-product', expressAsyncHandler(async(request, response, /*next*/)=>{
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
        let cartCollectionObject = request.app.get("cartCollectionObject")
        //get cart obj from req
        let cartObj = request.body;

        let products = await cartCollectionObject.findOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]})
        if(products == null){
            cartObj = {...cartObj, count : 1}
            //insert cartObj
            let result = await cartCollectionObject.insertOne(cartObj)
            //Send response
            response.send({message : 'Product added to cart successfully'})
        }
        else{
            co = products.count;
            co += 1;
            let result = await cartCollectionObject.updateOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]}, {$set:{count: co}})
            response.send({message : 'Quantity increased successfully'})
        }
        
        

}))

//create product with async n await
cartApp.post('/increasequantity', expressAsyncHandler(async(request, response, /*next*/)=>{
        //get productCollectionObject
        let cartCollectionObject = request.app.get("cartCollectionObject")
        //get cart obj from req
        let cartObj = request.body;

        let products = await cartCollectionObject.findOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]})
        co = products.count;
        co += 1;
        let result = await cartCollectionObject.updateOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]}, {$set:{count: co}})
        response.send({message : 'Quantity increased successfully'})
}))

//create product with async n await
cartApp.post('/decreasequantity', expressAsyncHandler(async(request, response, /*next*/)=>{
    //get productCollectionObject
    let cartCollectionObject = request.app.get("cartCollectionObject")
    //get cart obj from req
    let cartObj = request.body;

    let products = await cartCollectionObject.findOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]})
    co = products.count;
    co -= 1;
    if(co==0){
        let result = await cartCollectionObject.deleteOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]})
        response.send({message : "Quantity deleted successfully"})
    }
    else{
        let result = await cartCollectionObject.updateOne({$and : [{username:cartObj.username},{foodname : cartObj.foodname}]}, {$set:{count: co}})
        response.send({message : 'Quantity decreased successfully'})
    }
}))

/*
//update product
cartApp.put('/update-product', expressAsyncHandler(async(request, response)=>{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject")
    //get modified product obj
    let modifiedProduct = request.body;
    //update
    await productCollectionObject.updateOne({productId:modifiedProduct.productId}, {$set:{...modifiedProduct}})
    //send response
    response.send({message:"product modified"})
}))
*/

//delete product
cartApp.delete("/remove-product/:id", expressAsyncHandler(async(request, response)=>{

    //get productCollectionObject
    let cartCollectionObject = request.app.get("cartCollectionObject")
    //get cart obj from req
    let id = request.params.id
    await cartCollectionObject.deleteMany({username:id})
    response.send({message:"Products in cart deleted successfully"})

}))

//export cartApp
module.exports = cartApp;