const express=require("express");
const cors=require("cors");

const  jwt = require('jsonwebtoken');


const app=express();

app.use(cors());
app.use(express.json());




app.post("/login",(req,res)=>{


    // user name and password --->

req.body.role="admin";
var token = jwt.sign(req.body, 'shhhhh');

console.log(token);

res.json({status:"Success",token:token,role:"admin"});

})



app.listen(8080,(req,res)=>{


console.log("SErver Running");

})