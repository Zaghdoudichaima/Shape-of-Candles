import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

function NavBar() {
    const auth = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <Navbar
            bg="transparent"
            style={{ position: "sticky", height:"50px" , width:"1350px"}} >
            <Container fluid>
                <Navbar.Brand>
                  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll>
                    <img src="./Media/logo.jpg" alt="logo" className="logo" /> 
                        <Nav.Link as={Link} to="/" className="acceuil" >
                           Acceuil  
                        </Nav.Link>
                    </Nav>
                    {auth ? (
                        <>
                            <button
                                className="log"
                                onClick={handleLogout}
                            >
                                Se Déconnecter 
                            </button>

                            <Link to="/profile">
                                <button  className="log">
                                    Profile
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                         <Link to="/login">
                                <button  className="log">
                                    Se Connecter
                                </button>
                            </Link>  
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
