const express= require("express");

const bodyParser= require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen("3000",function(){

  console.log("server connected at 3000.");
})

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var email= req.body.email;
  console.log(firstName+" "+lastName+" "+email);
})
//121dc9e06c674881eaf3bf17b11dd00c-us12

//0e5f678914
