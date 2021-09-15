const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'../','index.html'));
})


module.exports = Router;