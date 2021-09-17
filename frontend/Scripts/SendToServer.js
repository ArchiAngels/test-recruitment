module.exports.SendMe = function(url,body){
    return new Promise(async function(res,rej){
        let t = setTimeout(()=>{
            rej({mess:'Time up',status:'bad'})
        },5000);
        let xhr = new XMLHttpRequest;
        let b = JSON.stringify(body);
        xhr.open('POST',url);
        xhr.send(b);
        console.log('BODY::',body,b);
        xhr.onload = function(){
            console.log('RES::',xhr.response);
            clearTimeout(t);
            res({value:JSON.parse(xhr.response),status:JSON.parse(xhr.response).status});
        };
    }).then(
        function(value){
            return value;
        },
        function(err){
            return err;
        }
    )    
} 