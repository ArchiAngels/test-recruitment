module.exports = function(req,res,next){
    // console.log(`MIDDLEWARE:`,req['headers'],req['cookies'],req['url']);
    next();
}

