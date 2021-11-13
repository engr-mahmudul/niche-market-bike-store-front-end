import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const ReviewPart = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {

                setReviews(data);
                setLoading(false);
                // console.log(data);
            });
    }, [])
    return (
        <>
            <h1 className='text-center fw-bold my-5' style={{ fontSize: 50, color: '#382353' }}>Customer Reviews</h1>
            <Container>
                <Row>
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ReviewPart;