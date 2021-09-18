import React from "react";
import './Login.scss';

import CustomInput from "../Input/CustomInput.jsx";





function Login(props){
    
    return <>   
        <CustomInput name='Email' title='Email' setElements={props.setElements} updateElements={props.updateElements}  code={4} />
        <CustomInput name='Password' title='Password' setElements={props.setElements} updateElements={props.updateElements}  code={2} />       
    </>
}

export default Login;