import React from "react";
import './Register.scss';

import CustomInput from "../Input/CustomInput.jsx";

function Register(props){
    return <>
        <CustomInput name='Name' title='Name' setElements={props.setElements} updateElements={props.updateElements} code={1} defaultValue={'Mikita'}/>
        <CustomInput name='LastName' title='Last name' setElements={props.setElements} updateElements={props.updateElements}  code={1} defaultValue={'Mikita'}/>
        <CustomInput name='DateOfBirth' title='Date of birth' setElements={props.setElements} updateElements={props.updateElements}  code={3} defaultValue={'2000-01-01'}/>
        <CustomInput name='Email' title='Email' setElements={props.setElements} updateElements={props.updateElements}  code={4} defaultValue={'Mikita@Mikita.Mikita'}/>
        <CustomInput name='Password' title='Password' setElements={props.setElements} updateElements={props.updateElements}  code={2} defaultValue={'123123123'}/>
    </>
}

export default Register;