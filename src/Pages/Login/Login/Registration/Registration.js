import './Registration.css'
import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import authPhoto from '../../../../Images/authPhoto/authPhoto.png'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Registration = () => {
    const [registerData, setRegisterData] = useState({});
    const { registerUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerData };
        newData[field] = value;
        setRegisterData(newData);
        // console.log(newData);
    }
    const loginFormSubmitHandler = e => {
        // loginUser(loginData.email, loginData.password, location, history)
        if (registerData.password !== registerData.password2) {
            // alert("Two Password Does not Matched..!");
            return
        }
        // console.log(registerData.email, registerData.password, registerData.name, history)
        else {

            registerUser(registerData.email, registerData.password, registerData.name, history);
            alert("Registration Successfully");
        }
        e.preventDefault();
    }
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} lg={6}>
                        <img src={authPhoto} width='90%' className='my-5 py-5' alt="" />
                    </Col>
                    <Col xs={12} lg={6} >
                        <div className='py-5 border mt-5 rounded'>
                            <h3 className='text-center my-4 fw-bold'>Please Register</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>

                                <form onSubmit={loginFormSubmitHandler} className="login-form">
                                    <input name='name' onBlur={handleOnChange} placeholder='Your Nmae' /> <br />
                                    <input name='email' type='email' onBlur={handleOnChange} placeholder=' Your Email' /> <br />
                                    <input name='password' type='password' onBlur={handleOnChange} placeholder=' Your Password' /> <br />
                                    <input name='password2' type='password' onBlur={handleOnChange} placeholder=' Confirm Password' /> <br />

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button type='submit' style={{ backgroundColor: '#382353', color: 'wheat', fontWeight: 700 }}>Register</Button>
                                    </div>
                                    <Link to='/login' style={{ display: 'flex', justifyContent: 'center' }}>
                                        <button type='submit' className='toogle-button'> Already Register?</button>
                                    </Link>

                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>



            </Container>


        </>
    );
};

export default Registration;