import React from "react";
import ReactDOM from "react-dom";
import Login from './login/Login.jsx';
import Register from './register/Register.jsx';

function Main(){
    return <>
        <h2>Hello World!</h2>
        <Login/>
        <Register/>
    </>
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)