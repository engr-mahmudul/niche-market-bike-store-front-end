import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Purches.css'

const Purches = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://arcane-escarpment-94457.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const onSubmit = data => {
        data.order = product;
        data.status = "pending"
        console.log(data);
        fetch('https://arcane-escarpment-94457.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Bookked Successfully');

                    reset();
                }
            })
    };

    return (
        <div>
            <Navigation></Navigation>
            <Row className='details-page-style '>
                <Col xs={12} lg={6} className=' border-2 border-end border-success py-4 mt-3'>
                    <h3 className='my-3 text-center fw-bold text-success'>{product.Model} Details</h3>
                    <div className='mx-1 my-2'>
                        <div className='d-flex justify-content-center'>
                            <img src={product.image} alt="" style={{ width: "70%", height: "250px", borderRadius: '10px', border: '2px solid #382353' }} />
                        </div>
                        <div>

                            <div className='p-3'>
                                <p className='description-p'>{product.description} </p>
                            </div>
                            <h5 style={{ textAlign: 'center' }} >Version: {product.version}</h5>
                            <h4 style={{ textAlign: 'center', color: 'green' }}>Price: {product.price}</h4>

                        </div>

                    </div>
                </Col>
                <Col xs={12} lg={6} className='py-4 mt-3'>
                    <h3 className='my-3 text-center fw-bold text-success'>Provide Your Info</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" value='Confirm Order' style={{ backgroundColor: 'green', color: 'white' }} />
                        </form>
                    </div>
                </Col>
                <Col xs={12} lg={12} >
                    <div className='details my-5'>
                        <Link to='/'><button className='btn px-5 mt-3 btn-warning '>Go Back Home ?</button></Link>
                    </div>
                </Col>


            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Purches;