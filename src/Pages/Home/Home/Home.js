import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

import Banner from '../Banner/Banner';
import Exclusive from '../Exclusive/Exclusive';
import Products from '../Products/Products';
import ReviewPart from '../ReviewPart/ReviewPart';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Exclusive></Exclusive>
            <ReviewPart></ReviewPart>
            <Footer></Footer>
        </div>
    );
};

export default Home;