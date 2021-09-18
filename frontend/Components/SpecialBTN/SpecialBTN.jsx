import React from "react";
import './SpecialBTN.scss';

function SpecialBTN(props){
    return <>
        <p onClick={props.function} className='Form__text__change'>
            {props.title}
        </p>
    </>
}

export default SpecialBTN;