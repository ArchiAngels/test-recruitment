const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'../','index.html'));
})

Router.post('/auth',function(req,res){
    console.log('REQ::',req.url);
    res.send('MMM...');
})


module.exports = Router;