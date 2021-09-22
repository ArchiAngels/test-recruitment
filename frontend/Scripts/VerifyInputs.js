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
    function ChangeDirectionAndRunIt(event){
        if(event.key == 'Backspace'){
            direction_right = false;
        }else{
            direction_right = true;
        }
        
    }
    
    function DeleteAndPast(){
        if(direction_right == true){
            if(value.length == 2 || value.length == 5){
                el.target.value+= '/';
            }
        }
        
        
    }
    value = value.trim();
    DeleteAndPast();
    
    let regex = /(\d){2}/gi;
    let result = value.match(regex);
    let counter = 3;
    
    
    if(result){
        // let how_much_pairs = Math.floor(result.length/2);
        // console.log(result,'\n',how_much_pairs,'pair\'s');
        // let new_value = '';
        // let new_result = [];
        // // if(how_much_pairs > 0){
        //     for(let i =0; i < how_much_pairs; i ++){
        //         let b = `${result[0 +(i*how_much_pairs)]}${result[1 +(i*how_much_pairs)]}`;
        //         new_result.push(b);
        //     }
        // console.log(new_result);
        // }
            
        if(result[2] && result[3]){
            /*
                          1    2    3    4
                WE have [xx] [xx] [xx] [xx]
                We need concat [3] and [4]
                after we have 
                  1    2    3
                [xx] [xx] [xxxx]
                this is pass to date format
            */
            result[2] += result[3];
            result.pop();
        }
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
        let regex = /^([a-zA-Z0-9]+[\-\.]?)+@([a-zA-Z0-9]+[\-\.]?)+\.[a-zA-Z]+$/gi
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
