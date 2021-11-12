import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import UserReview from '../UserReview/UserReview';
import './Dashboard.css'

const Dashboard = (props) => {
    const { window } = props;
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Row style={{ margin: '0 1px' }}>
                <Col xs={2} lg={2}>
                    <div style={{ backgroundColor: "gray", height: '70vh' }}>
                        <Link to={`${url}/pay`}>
                            Pay
                        </Link> <br />
                        <Link to={`${url}/myorders`}>
                            My Orders
                        </Link>

                    </div>


                </Col>
                <Col xs={10} lg={10} >
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`} >
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myorders`} >
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/reviews`} >
                            <UserReview></UserReview>
                        </Route>

                    </Switch>
                </Col>
            </Row>



        </div>
    );
};

export default Dashboard;