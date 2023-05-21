const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const bodyParser = require("body-parser");
app.use(express.json());

app.use(cors());
const PORT = 7075;


mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/").then(res=>{
    console.log("conect....")
})

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
})

const UserModel=mongoose.model("Users",UserSchema)


//get
app.get("/",async(req,res)=>{
    const data=await UserModel.find()
    res.send(data)
})
//post

app.post("/",async(req,res)=>{
    const newUser=new UserModel({
        ...req.body,
    })
await newUser.save()
res.send(newUser)
})

//delete
app.delete("/:id",async(req,res)=>{
    const{id}=req.params
 const newUser=await UserModel.findByIdAndDelete(id)
 res.send("delete")
})



app.listen(PORT,()=>{
    console.log("app listen...")
})

