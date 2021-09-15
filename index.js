const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ROUTERS = require('./backend/Router.js');

app.use(express.static('dist'));


app.use(ROUTERS);


app.listen(PORT,()=>{console.log('server start at: http://localhost:'+PORT)})