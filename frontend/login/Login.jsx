import React from "react";
import './Login.scss';

import CustomInput from "../Input/CustomInput.jsx";


function Login(){
    function CheckForm(e){
        console.log(e);
    }
    return <>
        <form action="/auth" method="post" onSubmit={(e)=>{e.preventDefault();CheckForm(e)}}>
            
            <CustomInput name='Name'/>
            <CustomInput name='Password'/>

            <input type="submit" value="Send" />
        </form>
    </>
}

export default Login;