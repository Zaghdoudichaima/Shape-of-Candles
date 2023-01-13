import React, { useState } from 'react';
import { FormControl, Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProduct } from '../../redux/productSlice';



function Editproduct({product}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
const dispatch = useDispatch();
    const [title,setTitle]= useState(product.title);
    const [price,setPrice]= useState(product.price);
    const [image,setImage]= useState(product.image);
    const handelupdate=(id)=>{
        dispatch(
            updateProduct({id,
             title,
             price,
             image
            }))
            handleClose();
    }
    
  return (
    <div>
        <button className="O" onClick={handleShow}>
        Edit
      </button>
         
        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormControl
              type="text"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <FormControl
              type="text"
              value={price} 
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <FormControl
            type="text"
            value={image} 
            onChange={(e) => setImage(e.target.value)}
            />
             
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="add" onClick={handleClose}>
           Fermer
          </button>
          <Button
            variant="primary"
            onClick={() =>handelupdate(product._id)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 

    </div>
  )
}

export default Editproduct