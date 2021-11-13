import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const PageNotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* Navigation */}

            <div style={{ textAlign: 'center', marginTop: "150px" }}>
                <h1 style={{ color: 'red', fontSize: '90px' }}> 404 </h1>
                <h2>Page Not Found</h2>
                <Link to='/'><button className='btn btn-success px-5 my-5 text-white'>Go Back Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;