import React, { useState } from "react";
import './notLogged.scss';

import Login from '../login/Login.jsx';
import Register from '../register/Register.jsx';
import Send from '../Send/Send.jsx';
import APIsend from '../../Scripts/SendToServer.js';
import SpecialBTN from "../SpecialBTN/SpecialBTN.jsx";


function notLogged(props){

    let [form,setForm] = useState(false);
    /*
        FALSE - REGISTER
        TRUE - LOGIN
    */
    function ChangeForm(){
        setForm(!form);
    }

    async function CheckForm(e){
        let bool = CanWeSendInfo();
        let url = form ? '/auth/login' : '/auth/signup';
        if(bool){
            let result = await APIsend.SendMe(url,elements.elemsValue);
            if(result.status == 'ok'){
                props.loginIn(result.value.token);
            }
        }
    }
    let form_state = form ? 'Sign up' : 'Sign in';
    let form_state2 = !form ? 'Sign up' : 'Sign in';
    let elements = {
        elems:{},
        counter:0,
        elemsValue:{}
    };

    function setElements(name){
        elements['elems'][name] = false;
        elements.counter ++;
    }
    function updateElements(name,value,text){
        elements['elems'][name] = value;
        elements['elemsValue'][name] = text;
    }
    function CanWeSendInfo(){
        let result = true;
        for(let i in elements['elems']){
            if(elements['elems'][i]){

            }
            else{
                result = false;
                break;
            }
        }
        return result;
    }

    return <>
        <div className="notLoggedContainer">
            <div className="notLoggedContent">
            <form action="/auth" method="post" onSubmit={(e)=>{e.preventDefault();CheckForm(e)}}>
                {form ? 
                    <Login setElements={setElements} updateElements={updateElements}/> 
                :
                    <Register setElements={setElements} updateElements={updateElements}/>
                }

                <Send title={form_state2}/>            
            </form>
                
                <SpecialBTN function={ChangeForm} title={form_state}/>
            </div>
        </div>
        
    </>
}

export default notLogged;