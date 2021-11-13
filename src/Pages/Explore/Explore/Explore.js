
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import SingleProduct from '../../Home/SingleProduct/SingleProduct';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://arcane-escarpment-94457.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });

    }, [])
    if (loading) {
        return <div >
            <Spinner style={{ margin: "100px 50%" }} animation="border" variant="danger" />
        </div>
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <h1 className="text-center fw-bold mt-5" style={{ color: '#382353', fontSize: '50px' }}>All Of Our Products</h1>

                <Row className="mt-5">

                    {
                        products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                    }

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;