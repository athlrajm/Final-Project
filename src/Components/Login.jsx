import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { Api2 } from './Api';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [Email, setEmail]=useState();
    const [Password, setPassword]=useState();
    const dispatch=useDispatch()
    const sub=()=>{
     Api2(dispatch,{Email,Password})
     console.log("loginfirst" ,Email,Password);
    }
  return (
    <div>
      <div class="lo-1">
      <div class="login-container">
      <h2 className='sign-up'>Login</h2>
      <div className="form2-group"> <input className='input-2' type="email"value={Email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br></br></div>
      <div className="form2-group">  <input className='input-2' type="text" value={Password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/></div>
            <div className='log'>
            <button className='bt-3' onClick={sub} >login</button>
            </div>

        
        <div class="new">
        <Link to={'/signup'}>
        <button className='bt-4'>create new account</button>
        </Link>
          </div>
        
      </div>
    </div>
    </div>
  )
}

export default Login