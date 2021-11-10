import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: "150px" }}>
            <h1 style={{ color: 'red', fontSize: '90px' }}> 404 </h1>
            <h2>Page Not Found</h2>
            <Link to='/'><button className='btn btn-success px-5 mt-5 text-white'>Go Back Home</button></Link>
        </div>
    );
};

export default PageNotFound;