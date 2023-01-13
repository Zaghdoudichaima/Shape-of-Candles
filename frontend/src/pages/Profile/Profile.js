import { useEffect} from "react";
import {useDispatch, useSelector } from "react-redux";
import {getAllUsers} from "../../redux/userSlice";


function Profile() {
const user= useSelector((state) => state.auth.user);
const dispatch=useDispatch()

// const [first_name,setFirst_name]= useState(user.first_name);
// const [last_name,setLast_name]= useState(user.last_name);
// const [phone,setPhone]= useState(user.phone);

// const handelupdate=(id)=>{
//     dispatch(
//        updateUser({id,
//           first_name,
//           last_name,
//           phone,

//         }))
// }

useEffect(() => {
    dispatch(getAllUsers())
},[dispatch]); 

 
 return (
  <div >
    <img className="profileImg" src="https://images.pexels.com/photos/7234648/pexels-photo-7234648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
    style={{ position:"fixed",
      objectFit:"cover",
      width: "100%",
      height: "500px",
      left: "0",
      top:"65px"}}/>  
  <div style={{marginRight:"300px"}}>
<div className="container" style={{height:"340px"}}  > 
 
    <div className="left"style={{marginTop: "40px"}} >
      <div className="Signup" >Welcome</div>
      <div className="eula">
      
      <button style={{border:"none", fontSize:"30px"}} id="btn">PANIER</button>
       
        </div>
    </div>
    <div className="right" style={{backgroundColor:"beige", height:"350px", marginTop:"30px"}}>
   
      <div className="form">
      <form >
        <label  className='lab2'  for="text">Nom</label>
        <input type='text'
                value={user?.first_name} 
              // onChange={(e) => setFirst_name(e.target.value)}
              />

        <label className='lab2' for="text">Prénom</label>
        <input  type='text'
                value={user?.last_name}
              // onChange={(e) => setLast_name(e.target.value)}
              />
        <label for="text">Numéro de Télephone</label>
        <input 
        type='text'
               value={user?.phone}
              // onChange={(e) => setPhone(e.target.value)}
               />
       
                {/* <button onClick={() =>handelupdate(user._id)} ></button> */}
                
                  
        </form>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Profile;
