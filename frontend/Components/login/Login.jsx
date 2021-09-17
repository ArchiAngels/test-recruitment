import React from "react";
import './Login.scss';

import CustomInput from "../Input/CustomInput.jsx";





function Login(props){
    
    return <>   
        <CustomInput name='Email' title='Email' setElements={props.setElements} updateElements={props.updateElements}  code={4} defaultValue={'Mikita@Mikita.Mikita'}/>
        <CustomInput name='Password' title='Password' setElements={props.setElements} updateElements={props.updateElements}  code={2} defaultValue={'123123123'}/>       
    </>
}

export default Login;