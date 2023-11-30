import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Api1 } from './Api';
import './Signup.css'
function Signup() {
  const [name, setName]=useState("");
   const [Lname,setLname]=useState("");
   const [age, setAge]=useState();
   const [Email, setEmail]=useState("");
   const [Password, setPassword]=useState("");
    const submit=(e)=>{
        e.preventDefault()
        Api1({name,Lname,age,Email,Password})
        console.log("name=",name);
        console.log("lname=",Lname);
        console.log("age=",age);
        console.log("password=",Password)
    }
  return (
    <div className='si-1'>
    <div className='sign-up-container'>
      <h2 className='sign-up'>Sign Up</h2>
      <form onSubmit={submit}>
           <div className="form-group"> <input className='input-1' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' /></div>
           <div className="form-group"><input className='input-1' value={Lname} onChange={(e)=>setLname(e.target.value)}type='text'placeholder='Last name'/></div>
           <div className="form-group"> <input className='input-1'value={age} onChange={(e)=>setAge(e.target.value)}type="number" placeholder='Age'/></div>
           <div className="form-group"><input className='input-1' value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' /></div>
           <div className="form-group"><input className='input-1' value={Password} onChange={(e)=>setPassword(e.target.value)}type='text'placeholder='Password'/></div>
           <div className='bt-1'><input className='input-1' type="submit" onClick={() => alert("Registration success,Please login")}/></div> 
        </form><br />
       <div className='bt-2'>
         <Link to={'/login'}>
          <button className='bt-2'>Already have an account? Login</button>
        </Link></div>
    </div>
    </div>
  )
}

export default Signup