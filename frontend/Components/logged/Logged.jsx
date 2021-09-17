import React from "react";
import './Logged.scss';

function Logged(props){
    return <>
        <p>Logged</p>
        <h2 onClick = {props.logout}>OUT</h2>
    </>
}

export default Logged;