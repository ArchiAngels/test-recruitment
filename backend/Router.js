const express = require('express');
const Router = express.Router();
const path = require('path');
const FindInDB = require('./FindInDB.js');
const CreateUser  = require('./MongoDBReq.js');
const LoginUser = require('./MongoDBLOGIN.js');
const JWT = require('./JWT.js');

Router.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../','index.html'));
})

Router.post('/auth/login', function(req,res){
    req.on('data',async function(chunk){
        let J = JSON.parse(chunk+'');
        let R = await LoginUser(J);
        if(R.status == 'ok'){
            res.json({...R,token:JWT.CODE(R)});
        }else{
            res.json(R);
        }
    })
})
Router.post('/auth/signup', function(req,res){
    req.on('data',async function(chunk){
        let J = JSON.parse(chunk+'');
        let R = await FindInDB(J);
        if(R.status == 'ok'){
            let result = await CreateUser(J);
            res.json({...result,token:JWT.CODE(result)});
        }else{
            res.json(R)
        }
    })
    
})
Router.post('/auth/token',function(req,res){
    req.on('data',async function(chunk){
        let J = JSON.parse(chunk+'');
        let R = JWT.DECODE(J,true);
        if(R.status == 'ok'){
            let result = await FindInDB(R.data.data,true);
            res.json(result);
        }else{
            res.json(R)
        }
    })
})

module.exports = Router;