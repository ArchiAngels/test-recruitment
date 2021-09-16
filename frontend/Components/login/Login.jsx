import React from "react";
import './Login.scss';

import CustomInput from "../Input/CustomInput.jsx";





function Login(props){
    
    return <>        
        <CustomInput name='Name' title='Name' setElements = {props.setElements} updateElements={props.updateElements} code={1}/>
        <CustomInput name='LastName' title='LastName' setElements = {props.setElements} updateElements={props.updateElements} code={1}/>
        <CustomInput name='Password' title='Password' setElements = {props.setElements} updateElements={props.updateElements} code={2}/>            
    </>
}

export default Login;