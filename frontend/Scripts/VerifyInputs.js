module.exports.Name_Surname = function(value,callback){
    value = value.trim();

    if(value.length > 2){
        let regex = /[\W-\d]/gi
        let result = value.match(regex);
        if(result){
            callback(false);
        }else{
            callback(true);
        }
    }else{
        callback(false);
    }
    
    


    
}
module.exports.Password = function(value,callback){
    // console.log(value);
    value = value.trim();
    if(value.length > 7){
        // console.log('GOOD ::',value);
        callback(true);
    }else{
        // console.log("BAD value::",value);
        callback(false);
    }
}
module.exports.DateOfBirth = function(value,callback){
    let regex = /\d{4}/gi;
    let result = value.match(regex);
    if(result){
        result = parseInt(result[0]);
    
        if(result > 1900 && result <= new Date().getFullYear() - 16){
            callback(true);
        }else{
            callback(false);
        }
    }
        
}


