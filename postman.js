const express = require("express");
var router = require("./router.js");
var app = express();
app.get("/", (req, res) =>{
    res.json("3");
})
app.listen("1999", ()=>{
    console.log("Run successful at localhost 1999!!!");
})
app.use("/router", router);