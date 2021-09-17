import React, { useState } from "react";
import './Toast.scss';

function Toast(props){
    let [toasts,setToasts] = useState([]);

    function CreateNewToast(text,time){
        let Toast = {
            text:text,
            end:function(){
                setTimeout(()=>{
                    console.log('DELETE::',this.text);
                },time);
            }

        }
        setToasts([...toasts,Toast]);
    }
    return <>
        <div className="Toasts__Container">
            {toasts.map((e,i) => {
                <div className="Toast__Content" key={i}>
                    <p>{e.text}</p>
                </div>
                e.end();
            })}
        </div>
    </>


}

export default Toast;