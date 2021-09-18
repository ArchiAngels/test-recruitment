module.exports.CODE = function(data){
    const jwt = require('jsonwebtoken');
    let secret = 'W3Ar37h3Ch@mpi0n5'
    let time = Math.floor(Date.now() / 1000) + (60 * 60);
    let token = jwt.sign({data,exp:time },secret);
    return token;

}

module.exports.DECODE = function(token,data = false){
    const jwt = require('jsonwebtoken');
    let secret = 'W3Ar37h3Ch@mpi0n5';
    let result = jwt.verify(token,secret,function(err,decoded){
        if(err){console.log(err);return {status:'bad',why:'bad decoded'}}
        else if(decoded){
            if(data == true){
                return {status:'ok',why:'succesfully decoded via bool',data:decoded}
            }
            else{
                return {status:'ok',why:'succesfully decoded'}
            }
        }
    });
    return result;
}