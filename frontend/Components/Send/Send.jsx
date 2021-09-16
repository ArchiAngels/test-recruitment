import React from "react";
import './Send.scss';

function CustomSend(props){
    return <div className="CustomSend_container">
        <input type="submit" value={props.title} className='CustomSend_input' />
    </div>
}

export default CustomSend;