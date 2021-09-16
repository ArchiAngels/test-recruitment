export default function SendMe(url,body){
    let xhr = new XMLHttpRequest;
    let b = JSON.stringify(body);
    xhr.open('POST',url);
    xhr.send(b);
    xhr.onload = function(){
        console.log('RES::',xhr.response);
    };
    console.log('BODY::',body,b);
} 