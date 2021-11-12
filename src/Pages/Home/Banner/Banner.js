import React from 'react';
import './Banner.css'
import { Carousel, Button } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.jpg'
import banner2 from '../../../Images/Banner/banner2.jpg'
import banner3 from '../../../Images/Banner/banner3.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id='banner'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '80vh', filter: 'brightness(35%)' }}
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className=' google-fonts'> Your Dream Bike Collectiion</h1>
                        <Link to='/explore'>
                            <Button type="button" variant="info" className='px-5  fw-bold' style={{ marginBottom: '80px', color: '#382353' }}> Explore Us</Button>
                        </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '80vh', filter: 'brightness(35%)' }}
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className=' google-fonts' >Enjoy Your Dream Drive</h1>
                        <Link to='/explore'>
                            <Button type="button" variant="info" className='px-5  fw-bold' style={{ marginBottom: '80px', color: '#382353' }}> Explore Us</Button>
                        </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '80vh', filter: 'brightness(30%)' }}
                        src={banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className=' google-fonts' > Enjoy Exclusive offfers Also </h1>
                        <Link to='/explore'>
                            <Button type="button" variant="info" className='px-5  fw-bold' style={{ marginBottom: '80px', color: '#382353' }}> Explore Us</Button>
                        </Link>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;