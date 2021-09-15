const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ROUTERS = require('./backend/Router.js');
const MIDDLEWARE = require('./backend/middleware.js');

app.use(function(req,res,next){
    MIDDLEWARE(req,res,next);
})

app.use(express.static('dist'));
app.use(express.static('public'));


app.use(ROUTERS);


app.listen(PORT,()=>{console.log('server start at: http://localhost:'+PORT)})