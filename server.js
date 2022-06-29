//Create express app
const exp = require('express')
const app = exp()
const mclient = require("mongodb").MongoClient

require('dotenv').config()

//import path module
const path = require('path');

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname, './build')))


//DB Connection URL
const DBurl = "mongodb+srv://vnr2022:vnr2022@shivacluster.zijeq.mongodb.net/?retryWrites=true&w=majority"

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

    //get DB object
    let dbObj = client.db("vnr2022db")
    //Create collection objects
    let userCollectionObject = dbObj.collection("usercollection")
    let productCollectionObject = dbObj.collection("productcollection")
    let cartCollectionObject = dbObj.collection("cartcollection")
    let ordersCollectionObject = dbObj.collection("orderscollection")


    //Sharing collection objects to APIS
    app.set("userCollectionObject", userCollectionObject);
    app.set("productCollectionObject", productCollectionObject);
    app.set("cartCollectionObject", cartCollectionObject);
    app.set("ordersCollectionObject", ordersCollectionObject);

    
    console.log("DB connection success")
})
.catch(err=>console.log("Error in DB connection", err))


//import userApp and productApp
const userApp = require('./APIS/userApi')
const productApp = require('./APIS/productApi')
const cartApp = require('./APIS/cartApi')
const ordersApp = require('./APIS/ordersApi')


app.use('/user-api', userApp);
app.use('/product-api', productApp)
app.use('/cart-api', cartApp)
app.use('/orders-api', ordersApp)

//dealing with page refresh
app.use('*', (request, response)=>{
    response.sendFile(path.join(__dirname, './build/index.html'))
})

//handling Invalid paths
app.use((request, response, next)=>{
    response.send({message: `path ${request.url} is invalid`})
})

//Error handling middleware
app.use((error, request, response, next)=>{
    response.send({message: "Error Occured", reason: `${error.message}`})
})

//assign port number
app.listen(4000, ()=>console.log("server listening on port 4000..."))
