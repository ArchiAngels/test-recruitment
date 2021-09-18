import React from "react";
import './Logged.scss';
import SpecialBTN from "../SpecialBTN/SpecialBTN.jsx";

function Logged(props){
    let info = {
        user : {...props.user},
        arr_user:[],
        DrawASText:function(){
            let regex = /[A-Z]([a-z])+/g;
            /*
                EXAMPLE -> (BirthOfDate) no space between words
                AFTER (.match) we'll see this (Birth of Date) with spaces,it's look better.
                If we have one word code will return him without any changes
            */
            for(let user in this.user ){
                /*
                    Convert format data from OBJ to ARRAY
                    In future we'll have use method (map)
                */
                let copyOfUser = user;
                    copyOfUser = copyOfUser.match(regex);
                    if(copyOfUser != null){
                        copyOfUser = copyOfUser.join(' ');
                    }else{
                        copyOfUser = user;
                    }
                this.arr_user.push({key:copyOfUser,value:this.user[user]});
            }
            return this.arr_user;
        }
    };
    return <>
        <SpecialBTN function={props.logout} title={'Logout'}/>
        <div className="WrapUser">
            {info.DrawASText().map((e,i)=>{
                return <div className="infoWrap" key={i+'div'}>
                    <div className="info__styled_wrap">
                        <h4 className='info__key'>{e.key}</h4>
                        <p className='info__value'>{e.value}</p>
                    </div>
                </div>
            })}
        </div>
        
    </>
}

export default Logged;