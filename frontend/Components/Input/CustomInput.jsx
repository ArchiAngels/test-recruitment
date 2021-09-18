import React from "react";
import './CustomInput.scss';


import Verify from '../../Scripts/VerifyInputs.js';

function CustomInput(props){
    /*
        1 - NAME / SURNAME
        2 - PASSWORD
        3 - DATE OF BIRTH
        4 - EMAIL
    */

    if(props.name){
        props.setElements(props.name);
    }
    if(props.defaultValue){
        props.updateElements(props.name,true,props.defaultValue);
    }
    

    function CheckInput(e){
        
        switch(props.code){
            case 1: Verify.Name_Surname(e.target.value,SendInfoBack);break;
            case 2: Verify.Password(e.target.value,SendInfoBack);break;
            case 3: Verify.DateOfBirth(e.target.value,SendInfoBack,e);break;
            case 4: Verify.Email(e.target.value,SendInfoBack);break;
        }

        function SendInfoBack(bool){
            if(!bool){
                let el = e.target;
                if(el.value.length > 0){
                    el.classList.add('bad')
                    el.classList.remove('good')
                }else if(el.value.length == 0){
                    el.classList.remove('bad')
                }
            }else{
                if(bool){
                    let el = e.target;
                    if(el.value.length > 0){
                        el.classList.add('good')
                        el.classList.remove('bad')
                    }else if(el.value.length == 0){
                        el.classList.remove('good')
                    }
                }
            }
            props.updateElements(e.target.name,bool,e.target.value);
            
        }

    }

    function WhatWECanEnter(code){
        switch(code){
            case 1: return 'Only letters, no digits and other min 3 characters';
            case 2: return 'You can enter everything min 8 characters';
            case 3: return 'Date in format dd/mm/yyyy';
            case 4: return 'You can use letters and digits and other like .-_ min 4 characters';
        }
    }

    return <div className="CustomInput_container">
        <label htmlFor={props.name}>{props.title}</label>
            <br/>
        <input type={props.code == 3? 'text':"text"} placeholder={'Enter '+props.title} id={props.name} name={props.name} className='CustomInput_input' onChange={(e)=>{CheckInput(e)}} defaultValue={props.defaultValue}/>
        <p className='CustomInput_help'>{WhatWECanEnter(props.code)}</p>
    </div>
}

export default CustomInput;