import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
import navlogo from '../../../Images/NavLogo/navlogo.png'
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const userIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const { user, logOut } = useAuth()
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
                        <Nav.Link as={HashLink} to="/explore" className='text-white' style={{ textAlign: 'center' }} >Explore Us</Nav.Link>




                        {/* <Nav.Link as={HashLink} to="" >My Orders</Nav.Link> */}

                        {user?.email ?
                            <Nav className='ml-4'>

                                <Nav.Link as={HashLink} to="/dashboard" className='text-white' >Dashboard</Nav.Link>

                                <span> <Button onClick={logOut} className='mr-2' style={{ border: 'none', outline: 'none', fontSize: 'larger', backgroundColor: '#382353' }}> {userIcon} </Button> <span style={{ color: 'yellow', fontWeight: '300', fontSize: '12px' }}>{user.displayName}</span></span>
                            </Nav> :
                            <Nav.Link as={HashLink} to="/login" className='text-white' style={{ textAlign: 'center' }} >Login</Nav.Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Navigation;