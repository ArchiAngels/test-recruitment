const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'../','index.html'));
})

Router.post('/auth/login',function(req,res){
    console.log('REQ::',req.url);
    req.on('data',function(chunk){
        console.log(chunk+'');
    })
    res.send('mmm... LOGIN')
})
Router.post('/auth/signup',function(req,res){
    console.log('REQ::',req.url);
    req.on('data',function(chunk){
        console.log(chunk+'');
    })
    res.send('mmm... SIGNUP')
})

module.exports = Router;