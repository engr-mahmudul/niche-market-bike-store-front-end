import { Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ex1 from '../../../Images/Exclusive/ex-1.png'
import ex2 from '../../../Images/Exclusive/ex-2.png'
import './Exclusive.css'

const Exclusive = () => {
    return (
        <Container className='mt-5'>
            <h1 className='text-center fw-bold my-5' style={{ fontSize: 50, color: '#382353' }}>Exclusive Collection</h1>
            <Row >
                <Col sx={12} lg={6} className='ex-image' >
                    <img src={ex1} alt="" width='90%' style={{ transform: 'scale(0.99)' }} />
                </Col>
                <Col sx={12} lg={6} className='ex-image' >
                    <img src={ex2} alt="" width='90%' width='90%' style={{ transform: 'scale(0.97)' }} />
                </Col>
            </Row>
            <Row>
                <Typography variant='h6' sx={{ marginTop: '30px', textAlign: 'center', fontWeight: 700, color: 'secondary.main', fontSize: '16px' }}>
                    These Speedy and Fantastic is waiting For your Test Drive..!
                </Typography>
            </Row>


        </Container>
    );
};

export default Exclusive;