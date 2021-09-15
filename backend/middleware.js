module.exports = function(req,res,next){
    console.log(`MIDDLEWARE:`,req['headers']);
    next();
}

