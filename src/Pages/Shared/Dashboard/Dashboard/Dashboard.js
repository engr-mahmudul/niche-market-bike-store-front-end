import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';



import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';





const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { user, logOut } = useAuth();
    let { path, url } = useRouteMatch(); // nested routing er jonno 
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ bgcolor: '#382353', color: 'background.paper', height: '100vh' }}>
            <Toolbar />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: 700, bgcolor: 'warning.main', margin: '0 2px', padding: '2px 7px' }}>
                    Functionlity
                </Typography>
            </Box>
            <Toolbar />
            {/* <Divider /> */}

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <NavLink to={`${url}`} style={{ textDecoration: 'none' }} >
                    <Button color="inherit" sx={{ color: 'background.paper', fontWeight: 700 }}>Dash Home</Button>
                </NavLink>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`${url}/pay`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'background.paper', fontWeight: 700 }}>Pay</Button>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`${url}/myorders`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'background.paper', fontWeight: 700 }}>My Orders</Button>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`${url}/reviews`} style={{ textDecoration: 'none' }}>
                    <Button color="inherit" sx={{ color: 'background.paper', fontWeight: 700 }}>Review</Button>
                </Link>
            </Box>

            {/* After divder  */}
            <Divider />

            <Divider />
            <Toolbar />
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link style={{ textDecoration: 'none' }} to='/home'>
                    < Button color="inherit" sx={{ color: 'background.paper', fontWeight: 700 }}> Back Home</Button>
                </Link>
            </Box >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="text" onClick={logOut} sx={{ color: 'background.paper', fontWeight: 700 }}>Log Out</Button>
            </Box>

            {/* {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`}>
                        <Button color="inherit" >Make Admin</Button>
                    </Link>
                    <Link to={`${url}/addDoctor`}>
                        <Button color="inherit" >Add Doctor</Button>
                    </Link>
                </Box>
            } */}





        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: 'white', color: 'black' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} noWrap component="div" >
                        Dear {user.displayName},  this your Dashboard..!
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}

                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
                <Drawer
                    // style={{ backgroundColor: '#08a69e', color: 'white' }}
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

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
                </Switch>



            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
