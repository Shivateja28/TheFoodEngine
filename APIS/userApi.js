//create router to handle user api reqs
const exp = require("express")
const userApp = exp.Router()
const expressAsyncHandler = require('express-async-handler')


//import bcryptjs for password hashing
const bcryptjs = require('bcryptjs')

//import jsonwebtoken to create token
const jwt = require("jsonwebtoken")
require("dotenv").config()
const verifyToken=require('./middlewares/verifyToken')

var cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

//configure cloudinary
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : "971944773965588",
    api_secret: "WgGhBmrkQ7to8De35MK3jfYRgPQ",
    secure : true
})

//config cloudinary storage
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : async (req, file)=>{
        return {
            folder : "vnr2022",
            public_id : file.fieldname + "-" + Date.now(),
        }
    }
})

//configure multer
var upload = multer({storage : cloudinaryStorage});



//to extract body of request object
userApp.use(exp.json())

//Create REST API

//USER API ROUTES

//Create route to handle '/getusers' path
userApp.get('/getusers', expressAsyncHandler(async(request, response)=>{
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject")
    //get all users
    let users = await userCollectionObject.find().toArray()
    //send res
    response.send({message:"Users list", payload:users})
}));



//Create route to user login
userApp.post('/login', expressAsyncHandler(async(request, response)=>{
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject")
    //get user credentials obj from client
    let userCredObj = request.body
    if(userCredObj.admin === "true"){
        let userOfDB = await userCollectionObject.findOne({admin:userCredObj.admin});
        //If username not existed
        if(userOfDB == null){
            response.send({message:"Invalid User"})
        }
        //If username existed
        else{
            //compare passwords
            let status = await bcryptjs.compare(userCredObj.password, userOfDB.password)
            //if passwords not matched
            if(status == false){
                response.send({message: "Invalid password"})
            }
            //if passwords are matched
            else{
                //create token
                let token = jwt.sign({username:userOfDB.username}, 'abcdef', {expiresIn:500/*sec*/})
                //send token
                response.send({message : "success", payload:token, userObj:userOfDB})
            }
        }
    }
    else
    {        //search for user by username
        let userOfDB = await userCollectionObject.findOne({username:userCredObj.username});
        //If username not existed
        if(userOfDB == null){
            response.send({message:"Invalid User"})
        }
        //If username existed
        else{
            //compare passwords
            let status = await bcryptjs.compare(userCredObj.password, userOfDB.password)
            //if passwords not matched
            if(status == false){
                response.send({message: "Invalid password"})
            }
            //if passwords are matched
            else{
                //create token
                let token = jwt.sign({username:userOfDB.username}, 'abcdef', {expiresIn:60/*sec*/})
                //send token
                response.send({message : "success", payload:token, userObj:userOfDB})
            }
        }
    }
}))

//Create a route to 'create-user'
userApp.post('/create-user', expressAsyncHandler(async(request, response)=>{
    
    //get userCollection Object
    let userCollectionObject = request.app.get("userCollectionObject")
    //get userObj from client
    let newUserObj = request.body;
    //search for user by username
    let userOfDB = await userCollectionObject.findOne({username:newUserObj.username})
    //if user existed
    if(userOfDB !== null){
        response.send({message : "Username has already taken..Plz choose another"})
    }
    //if user not existed
    else{
        //hash password
        let hashedPassword = await bcryptjs.hash(newUserObj.password, 6)
        //replace plain password with hashed password in newUserObj
        newUserObj.password = hashedPassword;
        //insert newUser
        await userCollectionObject.insertOne(newUserObj)
        //send response
        response.send({message: "New User created"})
    }

}))


//Create a route to modify user data
userApp.put('/update-user', expressAsyncHandler(async(request, response)=>{
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get userObj from client
    let newUserObj = request.body;
    await userCollectionObject.updateOne({username:newUserObj.name},{$set:{username:newUserObj.name,email:newUserObj.email,city:newUserObj.city}})
    response.send({message: "Updated!"})
}))

//Create a route to delete user by Id
userApp.delete('/remove-user/:id', expressAsyncHandler(async(request, response)=>{
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get username from url param
    let uname=request.params.name;
    //remove user
    await userCollectionObject.deleteOne({username:{$eq:uname}})
    response.send({message:"Deleted!"})
}))


//export userApp
module.exports = userApp;