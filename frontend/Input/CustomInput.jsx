import React from "react";
import './CustomInput.scss';

function CustomInput(props){

    return <div className="CustomInput_container">
        <label htmlFor={props.name}>{props.name}</label>
            <br/>
        <input type="text" placeholder={'Enter '+props.name} id={props.name} name={props.name} className='CustomInput_input'/>
    </div>
}

export default CustomInput;