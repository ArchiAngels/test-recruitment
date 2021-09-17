const express = require('express');
const Router = express.Router();
const path = require('path');
const FindInDB = require('./FindInDB.js');
const CreateUser  = require('./MongoDBReq.js');
const LoginUser = require('./MongoDBLOGIN.js');
const JWT = require('./JWT.js');

Router.get('/',function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'../','index.html'));
})

Router.post('/auth/login', function(req,res){
    console.log('REQ::',req.url);
    req.on('data',async function(chunk){
        let J = JSON.parse(chunk+'');
        console.log(J);
        let R = await LoginUser(J);
        console.log(R)
        if(R.status == 'ok'){
            res.json({...R,token:JWT.CODE(R)});
        }else{
            res.json(R);
        }
    })
})
Router.post('/auth/signup', function(req,res){
    console.log('REQ::',req.url);
    req.on('data',async function(chunk){
        let J = JSON.parse(chunk+'');
        console.log(J);
        let R = await FindInDB(J);
        console.log(R);
        if(R.status == 'ok'){
            let result = await CreateUser(J);
            res.json({...result,token:JWT.CODE(result)});
        }else{
            res.json(R)
        }
    })
    
})
Router.post('/auth/token',function(req,res){
    console.log(req.url);
    req.on('data',function(chunk){
        let J = JSON.parse(chunk+'');
        console.log(J);
        let R = JWT.DECODE(J);
        if(R.status == 'ok'){
            res.json(R);
        }else{
            res.json(R)
        }
    })
})

module.exports = Router;