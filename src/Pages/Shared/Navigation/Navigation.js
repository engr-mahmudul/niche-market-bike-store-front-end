import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
import navlogo from '../../../Images/NavLogo/navlogo.png'

const Navigation = () => {
    return (
        <>
            <Navbar className='nav-bg py-2 nav-container' sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand >
                        <img src={navlogo} style={{ height: "50px", width: "60px", borderRadius: "50%", padding: "7px" }} alt="" />
                        <span className='font-style' style={{ color: "white", fontWeight: "800", marginLeft: "20px" }}>Bike Store</span>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={HashLink} to="/home" className='text-white' style={{ textAlign: 'center' }} >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/login" className='text-white' style={{ textAlign: 'center' }} >Login</Nav.Link>


                        {/* <Nav.Link as={HashLink} to="" >My Orders</Nav.Link> */}

                        {/* {user?.email ?
                    <Nav className='ml-4'>

                        <Nav.Link as={HashLink} to="/myOrders" className='text-white' >My Orders</Nav.Link> <span> <Button onClick={logOut} className='mr-2' style={{ border: 'none', outline: 'none', fontSize: 'larger', backgroundColor: '#8264e6' }}> {userIcon} </Button> <span style={{ color: 'yellow', fontWeight: '700' }}>{user.displayName}</span></span>
                    </Nav> :
                    <Nav.Link as={HashLink} to="/login" className='text-white' >Log in</Nav.Link>} */}


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Navigation;