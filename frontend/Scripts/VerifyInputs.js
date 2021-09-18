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
    value = value.trim();
    if(value.length > 7){
        callback(true);
    }else{
        callback(false);
    }
}
let direction_right = true;
module.exports.DateOfBirth = function(value,callback,el){
    /*
        [0]/[1]/[2]
        dd/mm/yyyy
    */

    window.addEventListener('keydown',(e)=>{ChangeDirectionAndRunIt(e)});
    window.addEventListener('keypress',(e)=>{ChangeDirectionAndRunIt(e)});
    window.addEventListener('keyup',(e)=>{ChangeDirectionAndRunIt(e)});
    function ChangeDirectionAndRunIt(event){
        if(event.key == 'Backspace'){
            direction_right = false;

        }else{
            direction_right = true;
        }
        
    }
    
    function DeleteAndPast(){
        if(direction_right == true){
            if(value.length  == 2 || value.length == 5){
                el.target.value+= '-';
            }
        }
        
        
    }
    value = value.trim();
    DeleteAndPast();
    
    let regex = /[0-9]+/gi;
    let result = value.match(regex);
    let counter = 3;
    if(result){

        result.map((e,i)=>{
            e = parseInt(e);
            if(i == 0){
                if(e >= 1 && e <= 31){
                    counter --;
                }
            }
            else if(i == 1){
                if(e >= 1 && e <= 12){
                    counter --;
                }
            }
            else if(i == 2){
                if(e >= 1900 && e <= new Date().getFullYear()){
                    counter --;
                }
            }

        })
        if(counter == 0){
            callback(true);
        }else{
            callback(false);
        }
    
        
    }
        
}

module.exports.Email = function(value,callback){
    value = value.trim();

    if(value.length > 3){
        let regex = /^([a-zA-Z0-9]+[\-\.]?)+@([a-zA-Z0-9]+[\-\.]?)+\.[a-zA-Z0-9]+$/gi
        let result = value.match(regex);
        if(result){
            callback(true);
        }else{
            callback(false);
        }
    }else{
        callback(false);
    }
}
