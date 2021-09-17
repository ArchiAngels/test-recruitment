import React, { useEffect, useState } from "react";
import './Main.scss';
import NotLogged from "../notLogged/notLogged.jsx";
import Logged from '../logged/Logged.jsx';
import APIsend from '../../Scripts/SendToServer.js';

function Main(){
    let [logged,setLogged] = useState(false);

    useEffect(async ()=>{
        if(logged){
            console.log('Already logged');
        }else{
            let l = localStorage;
            console.log("L::",l)
            let item = l.getItem('token');
            if(item != null){
                let result = await APIsend.SendMe('/auth/token',item);
                console.log('MAIN::',result);
                setLogged(result.status);
            }
        }
    })

    function logOut(){
        localStorage.clear();
        setLogged(false);
    }
    function LogIn(token){
        localStorage.setItem('token',token);
        setLogged(true);
    }

    return <>
        {logged ? <Logged logout={logOut}/> : <NotLogged loginIn={LogIn}/> }
    </>
}

export default Main;