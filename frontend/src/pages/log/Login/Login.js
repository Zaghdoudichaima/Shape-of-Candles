import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './Login.css';
import video1 from "./video1.mp4";
import { loginUser } from "../../../redux/authSlice";


function Login() {
  const [data,setData]=useState({phone:"",password:""})
  const user=useSelector(state=>state.auth.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
};

const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(loginUser(data))
};

useEffect(()=>{
if(user){
  navigate('/profile')
}
},[user,navigate])


  return (



  <div className="container" > 
    <video id='myVideo' loop autoplay mute >
    <source src={video1} type="video/mp4" />
    </video>
   
    <div className="left">
      <div className="Signup">Inscrit</div>
      <div className="eula">SI VOUS AVEZ PAS UN COMPTE 
      <Link to='/register'>
      <br/><br/> <button className="hover" id="btn">Enregistrer</button>
        </Link> 
        </div>
    </div>
    <div className="right">
   
      <div className="form">
      <form  onSubmit={handleSubmit} >
        <label for="number">Numéro de Télephone</label>
        <input className="hover" 
        type='text'
                placeholder='+216'
                name='phone'
               onChange={handleChange}/>
        <label for="password">Mot de Passe</label>
        
        
        <input className="hover" 
        type='password'
                placeholder='******'
                name='password'
               onChange={handleChange} required />
                
                <input  type="submit" id="submit" value="Se Connecter "/>
        </form>
      </div>
    </div>
  </div>


);
}

export default Login;
