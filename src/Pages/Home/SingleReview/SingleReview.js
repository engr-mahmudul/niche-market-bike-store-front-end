import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleReview.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const SingleReview = (props) => {
    let { name, email, comment, ratings } = props.review;

    if (ratings > 5) { ratings = 5; }
    else if (ratings < 1) { ratings = 1; }
    return (
        <Col lg={4} md={6} sm={12} xs={12} >
            <div className='mx-1 my-2 text-center single-review-card'>
                <h4 className='py-3 fw-bold'>{name}</h4>
                <h5>{email}</h5>
                <p style={{ height: '30px' }}>{comment.slice(0, 40)}</p>
                <div style={{ display: "flex", justifyContent: 'center' }}>
                    <Stack spacing={1}>

                        <Rating name="half-rating-read" value={ratings} precision={0.5} readOnly />
                    </Stack>
                </div>
            </div>
        </Col>
    );
};

export default SingleReview;