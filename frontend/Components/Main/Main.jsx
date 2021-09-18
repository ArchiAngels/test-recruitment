import React, { useEffect, useState } from "react";
import './Main.scss';
import NotLogged from "../notLogged/notLogged.jsx";
import Logged from '../logged/Logged.jsx';
import APIsend from '../../Scripts/SendToServer.js';

function Main(){
    let [logged,setLogged] = useState({info:null,status:false});

    useEffect(async ()=>{
        if(logged.status){
            console.log('Already logged');
        }else{
            let l = localStorage;
            let item = l.getItem('token');
            if(item != null){
                let result = await APIsend.SendMe('/auth/token',item);
                if(result.status == 'ok'){
                    setLogged({...logged,status:true,info:result.value.user});
                }else{
                    console.log('BAD TOKEN');
                }
                
            }
        }
    })

    function logOut(){
        localStorage.clear();
        setLogged({...logged,status:false});
    }
    function LogIn(token){
        localStorage.setItem('token',token);
        setLogged({...logged,status:false});
    }

    return <>
        
        <div className="main__container">
            <p className='Status__account'>{logged.status ? 'Logged': 'Not Logged' }</p>
            {logged.status ? <Logged logout={logOut} user={logged.info}/> : <NotLogged loginIn={LogIn}/> }
        </div>
        
    </>
}

export default Main;