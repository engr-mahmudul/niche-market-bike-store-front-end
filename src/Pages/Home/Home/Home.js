import React from 'react';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewPart from '../ReviewPart/ReviewPart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ReviewPart></ReviewPart>
        </div>
    );
};

export default Home;