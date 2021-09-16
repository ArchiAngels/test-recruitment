import React from "react";
import './CustomInput.scss';


import Verify from '../../Scripts/VerifyInputs.js';

function CustomInput(props){
    /*
        1 - NAME / SURNAME
        2 - PASSWORD
        3 - DATE OF BIRTH
    */

    props.setElements(props.name);

    function CheckInput(e){
        
        switch(props.code){
            case 1: Verify.Name_Surname(e.target.value,SendInfoBack);break;
            case 2: Verify.Password(e.target.value,SendInfoBack);break;
            case 3: Verify.DateOfBirth(e.target.value,SendInfoBack);break;
        }

        function SendInfoBack(bool){
            // console.log(e.target.name,bool);
            props.updateElements(e.target.name,bool,e.target.value);
        }
    }

    return <div className="CustomInput_container">
        <label htmlFor={props.name}>{props.title}</label>
            <br/>
        <input type={props.code == 3? 'date':"text"} placeholder={'Enter '+props.title} id={props.name} name={props.name} className='CustomInput_input' onChange={(e)=>{CheckInput(e)}}/>
    </div>
}

export default CustomInput;