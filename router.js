const express = require("express");
var router = express.Router();

router.get("/", (req, res) =>{
    res.json("This is my router");
})

module.exports = router;