import React, { useState } from "react";
import './Main.scss';

import Login from '../login/Login.jsx';
import Register from '../register/Register.jsx';

function Main(){

    let [form,setForm] = useState(false);
    /*
        FALSE - REGISTER
        TRUE - LOGIN
    */
   function ChangeForm(){
       setForm(!form);
   }
    return <>
        <div className="MainContainer">
            <div className="MainContent">
                {form ? <Register/> : <Login/>}
                <p onClick={ChangeForm} className='Form__text__change'>
                    {form ? 'Sign up' : 'Sign in'}
                </p>
            </div>
            
        </div>
    </>
}

export default Main;