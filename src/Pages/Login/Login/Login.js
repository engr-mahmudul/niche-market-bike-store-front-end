import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.css'
import authPhoto from '../../../Images/authPhoto/authPhoto.png'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, registerUser, loginUser, logOut, isLoading, authError, signInWithGoogle } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
        console.log(newData);
    }
    const loginFormSubmitHandler = e => {
        loginUser(loginData.email, loginData.password, location, history)
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
                            <h3 className='text-center my-4 fw-bold'>Please Log In</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>

                                <form onSubmit={loginFormSubmitHandler} className="login-form">
                                    <input name='email' type='email' onBlur={handleOnChange} /> <br />
                                    <input name='password' type='password' onBlur={handleOnChange} /> <br />

                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button type='submit' style={{ backgroundColor: '#382353', color: 'wheat', fontWeight: 700 }}>Sign In</Button>
                                    </div>
                                    <Link to='/register' style={{ display: 'flex', justifyContent: 'center' }}>
                                        <button type='submit' className='toogle-button'> New user ? Register</button>
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

export default Login;