import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts} from "../../redux/productSlice";
import Editproduct from "./Editproduct";
import Swal from 'sweetalert2'


function ProductCard() {
    const product = useSelector((state) => state.product.products);  
    const {user,auth} = useSelector((state) => state.auth);
const dispatch=useDispatch();
useEffect(() => {
      dispatch(getProducts())
  },[dispatch]);

const addorder=(id)=>{

}

const handeldelete=(id)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deleteProduct(id))
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
  return (

<div> 
<br/><br/>
        {product.map((product,index) => (  
 <div className="containerP" id="containerP" >
 <div className="card" style={{width:"350px",height:"540px",marginRight:"-30px",marginLeft:"50px"}} >
    <h2>{product.title}</h2>
     <div className="imgBx">
         <img src={product.image} alt="candle"style={{width:"300px",height:"320px"}}/>
     </div>

      <div className="contentBx">
         
         <h3>{product.price}</h3>
        <button className="butn" >Commander</button>
       
 {auth && user.role==="admin"? (
<>
     <button className="X"  onClick={()=>handeldelete(product._id)}> X </button>
    
    <Editproduct product={product}/>
  
</>):(null)} 
        
    </div> 
  </div>
</div>

))};
    
        
    </div>
        
  );
}

export default ProductCard;
