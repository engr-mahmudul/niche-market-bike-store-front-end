import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const { _id, Model, version, description, price, image } = props.product
    return (
        <Col lg={4} md={6} sm={12} xs={12} >
            <div className='mx-1 my-2  card-style'>
                <div>
                    <img src={image} alt="" style={{ width: "100%", height: "250px", borderRadius: '10px', border: '2px solid #382353' }} />
                </div>
                <div>
                    <h4 style={{ textAlign: 'center', fontWeight: '700' }} className='pt-3'>{Model}</h4>
                    <div className='p-3'>
                        <p className='description-p'>{description} </p>
                    </div>
                    <h6 style={{ textAlign: 'center' }} >Version: {version}</h6>
                    <h6 style={{ textAlign: 'center', color: 'green' }}>Price: {price}</h6>

                </div>
                <div className="button-class">
                    <Link to={`/product/${_id}`}>
                        <Button style={{ backgroundColor: '#382353', color: 'wheat' }} className='px-5 single-button mt-3'>Purches</Button>
                    </Link>
                </div>
            </div>
        </Col>
    );
};

export default SingleProduct;