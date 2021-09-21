import React from "react";
import './Register.scss';

import CustomInput from "../Input/CustomInput.jsx";

function Register(props){
    return <>
        <CustomInput name='Name' title='Name' setElements={props.setElements} updateElements={props.updateElements} code={1}/>
        <CustomInput name='LastName' title='Last name' setElements={props.setElements} updateElements={props.updateElements}  code={1} />
        <CustomInput name='DateOfBirth' title='Date of birth' setElements={props.setElements} updateElements={props.updateElements}  code={3} />
        <CustomInput name='Email' title='Email' setElements={props.setElements} updateElements={props.updateElements}  code={4} />
        <CustomInput name='Password' title='Password' setElements={props.setElements} updateElements={props.updateElements}  code={2}/>
    </>
}

export default Register;