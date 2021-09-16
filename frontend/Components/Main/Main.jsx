import React, { useEffect, useState } from "react";
import './Main.scss';
import NotLogged from "../notLogged/notLogged.jsx";
import Logged from '../logged/Logged.jsx';

function Main(){
    let [logged,setLogged] = useState(false);

    useEffect(()=>{
        let l = localStorage;
        console.log("L::",l)
    })

    return <>
        {logged ? <Logged/> : <NotLogged/> }
    </>
}

export default Main;