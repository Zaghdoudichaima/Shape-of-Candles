// import axios from "axios";
import {useState } from "react";
import {Form, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Détails from "../../components/Détails";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import { addProduct } from "../../redux/productSlice";
import "./Land.css";
import ProductCard from "./ProductCard";


function LandPage() {
  const {user,auth} = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch=useDispatch();

  const [data,setData] = useState({title:"",price:"",image:""});
  
  const handleChange =(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault ();
    dispatch(addProduct(data),handleClose());
  };

  return (              
     <div className="row justify-content-center">  
    
    {auth && user.role==="admin"? (
     <> <button className="add" onClick={handleShow}>
        Add product
      </button>
      </>):(<h1 className="commande">Shape Of Candles</h1>)}

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Enter New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormControl
              type="text"
              placeholder="Enter title"
              name="title" 
              onChange={handleChange}
            />
            <br />
            <FormControl
              type="text"
              placeholder="Enter price"
              name="price"
              onChange={handleChange}
            />
            <br />
            <FormControl
            type="text"
            placeholder="Enter image"
            name="image"
            onChange={handleChange}
            />
             
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="add" onClick={handleClose}>
           Fermer
          </button>
          <button className="add" onClick={handleSubmit} >
            Enregister
          </button>
        </Modal.Footer>
      </Modal> 
<br/>
     <div>
      <Détails/>
      <Home/>
      <ProductCard/>
     <Footer/>
   </div>
</div>

  );
} 
export default LandPage;