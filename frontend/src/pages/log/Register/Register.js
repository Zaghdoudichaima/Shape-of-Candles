import {Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import "./Register.css"
import video2 from "./video2.mp4"
import { registerUser } from '../../../redux/authSlice';


function Register() {

const [data,setData]=useState({first_name:"",last_name:"",phone:"",password:""});
const user=useSelector(state=>state.auth.user);
const dispatch=useDispatch();
const navigate=useNavigate();


const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(registerUser(data))
};

useEffect(()=>{
if(user){
  navigate('/profile')
}
},[user,navigate])

  return (

<div className="container2" >
<video id='myVideo' loop autoplay mute >
 <source src={video2} type="video/mp4" />
</video>
    <div className="left2">
      <div className="login">Connecter</div>
      <div className="eula">SI VOUS AVEZ UN COMPTE 
      <Link to='/login'>
      <br/><br/> <button className="hover2" id="btn2" >Se Connecter</button>
        </Link>
        </div>
    </div>
    <div className="right2">
      <div className="form">
      <form onSubmit={handleSubmit}  >
        <label  className='lab2'  for="text">Nom</label>
        <input className="hover2" type='text'
              placeholder='XXX'
                name='first_name'
              onChange={handleChange} required />

        <label className='lab2' for="text">Prénom</label>
        <input className="hover2" type='text'
               placeholder='YYY'
                name='last_name'
              onChange={handleChange} required/>

        <label  className='lab2'  for="text">Numéro de Télephone</label>
        <input className="hover2" type='String'
                placeholder='+216'
                name='phone'
                onChange={handleChange} required/>

        <label  className='lab2'  for="text">Mot de Passe</label>
        <input className="hover2"  type='password'
                placeholder='******'
                name='password'
                onChange={handleChange} required />

                <input  type="submit" id="submit2" value="Enregister"/>
        </form>
      </div>
    </div>
  </div>

);
}

export default Register;
