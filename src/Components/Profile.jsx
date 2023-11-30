import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {logOut} from '../Redux/CreateSlice'
import {updateapi} from './Api'
import './Profile.css'

const Profile = () => {
    const dispatch=useDispatch()
  // const upX=useSelector(state=>state.userdatas.loginInfo)
  
    const logoutX=()=>{
      dispatch(logOut())
    }
    
    const [Name,setName]=useState([])
    const cg=useSelector(state=>state.userdata.loginInfo[0].data)
    updateapi({Name})
    // console.log("upx",upX)
    console.log("Namex",cg);
  return (
    
    <div className='profile-main'>
        <h1 className='pro-1'>your details are:</h1>
       
       <table className='tab-1' style={{width:500}}>
        <tr className='tr-1'>
          <th className='th-1'>Name</th>
          
          <th className='th-1'>LastName</th>
          <th className='th-1'>Age</th>
          <th className='th-1'>Email</th>
        </tr>
        
        <tr>
          <td className='td-1'>{cg.Name}</td>
          <td className='td-1'>{cg.Lastname}</td>
          <td className='td-1'>{cg.Age}</td>
          <td className='td-1'>{cg.Email}</td>
          
        </tr>
        
        
       </table><br/>
        
        <div className='profile-main'>
        <Link to={'/orders'}>
          <button className='but-1'>Orders</button>
        </Link>
        </div>
        
        <button className='but-1' onClick={logoutX}>Logout</button>
        {/* <div className='but-2'>
        <Link className='but-2' to={'updated'}>Update</Link>
        </div> */}
    </div>
    
  )
}

export default Profile