import axios from "axios";
import React, { useState } from "react"

const Login = () => {
    const [ login ,setLogin] =useState<Partial<{ email:string,password:string }>>(
        {
            email:undefined,
            password:undefined
        }
    ) 
    
        const onLogin = async (e:any) => {
            e.preventDefault();
            const res = await axios.post('http://localhost:8000/api/login',login).then(res => res)
            if(res.status === 200){
              window.location.href = '/'
            }
        }

    return (
        <div>
            <span>Email</span><br/>
            <input type="text" onChange={({target}) =>  setLogin(prev => ({ ...prev,email:target.value })) } value={login.email || ""}/>
            <span>Password</span>
            <input type="text" onChange={({target}) =>  setLogin(prev => ({ ...prev,password:target.value })) } value={login.password || ""}/><br/>
            <button type="button" onClick={onLogin} style={{ background:"green" }}>Войти</button>
        </div>
    )
}

export { Login }
