import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';
import { Spinner } from 'react-bootstrap';


const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        const url = `https://arcane-escarpment-94457.herokuapp.com/orders?email=${user?.email}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
        setLoading(false);
    }, [products])

    const deleteHandle = id => {
        // console.log(id);
        const procced = window.confirm("Are you sure to remove this Product?");
        if (procced) {
            const url = `https://arcane-escarpment-94457.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
        }

    }
    if (loading) {
        return <div >
            <Spinner style={{ margin: "100px 50%" }} animation="border" variant="danger" />
        </div>
    }

    return (
        <Container>
            <Typography variant='h5' sx={{ fontWeight: 700, mb: 3, color: 'green', textAlign: 'center' }}>
                Total Ordered: {products.length} products
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#08a69e' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} >Product Name</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} align="center">Price</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} align="center">Status</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: 'white' }} align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.order?.Model}
                                </TableCell>
                                <TableCell align="center">{row?.order?.price}</TableCell>
                                <TableCell align="center" sx={{ color: 'green' }}>{row?.status}</TableCell>
                                <TableCell onClick={() => deleteHandle(row?._id)} align="center"><IconButton sx={{ color: 'error.main' }} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;