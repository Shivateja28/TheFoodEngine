//create router to handle orders api reqs
const exp = require("express");
const ordersApp = exp.Router();
require('dotenv').config()

const expressAsyncHandler = require('express-async-handler')

//to extract body of request object
ordersApp.use(exp.json())

const verifyToken=require('./middlewares/verifyToken')

//orders API ROUTES

//get all orderss
ordersApp.get('/getorders', expressAsyncHandler(async(request, response)=>{


    //get ordersCollectionObject
    let ordersCollectionObject = request.app.get("ordersCollectionObject")
    //read all orderss
    let orders = await ordersCollectionObject.find().toArray()
    //send response
    response.send({message:"all orders", payload:orders})
}))


//get orders by ID
ordersApp.get("/getorders/:username",expressAsyncHandler(async(request, response)=>{

    //get ordersCollectionObject
    let ordersCollectionObject = request.app.get("ordersCollectionObject")
    //get ordersId from url param
    let username = request.params.username;
    //get orders by id
    let orders= await ordersCollectionObject.find({username:username}).toArray();
    //if orders not existed with given Id
    if(orders.length == 0){
        response.send({message:"No orders "})
    }
    //if orders existed
    else{
        response.send({message : 'orders existed', payload:orders})
    }

}))

//create orders with async n await
ordersApp.post('/addorder', expressAsyncHandler(async(request, response, /*next*/)=>{

        //get ordersCollectionObject
        let ordersCollectionObject = request.app.get("ordersCollectionObject")
        //get orders obj from req
        let ordersObj = request.body;
        //insert ordersObj
        let result = await ordersCollectionObject.insertOne(ordersObj)
        //Send response
        response.send({message : 'orders created successfully'})
        

}))



//export ordersApp
module.exports = ordersApp;