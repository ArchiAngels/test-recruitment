import React from "react";
import './Register.scss';

function Register(){
    function CheckForm(e){
        console.log(e);
    }
    return <>
        <form action="/auth" method="post" onSubmit={(e)=>{e.preventDefault();CheckForm(e)}}>
            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" placeholder='Enter name' id='name' name='name' />
            <br/>

            <label htmlFor="surname">Last name</label>
            <br/>
            <input type="text" placeholder='Enter name' id='surname' name='surname' />
            <br/>

            <label htmlFor="dateOfBirth">Date of birth</label>
            <br/>
            <input type="text" placeholder='Enter name' id='dateOfBirth' name='dateOfBirth' />
            <br/>

            <label htmlFor="pass">Password</label>
            <br/>
            <input type="text" placeholder='Enter name' id='pass' name='pass' />
            <br/>

            <input type="submit" value="Send" />
        </form>
    </>
}

export default Register;