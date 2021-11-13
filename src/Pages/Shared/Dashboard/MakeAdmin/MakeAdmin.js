import { TextField, Button, Alert, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { user, admin } = useAuth()
    const textFieldHandler = (e) => {
        setEmail(e.target.value);
        // console.log(e.target.value)
    }

    const makeAdminSubmitHandler = (e) => {
        // const user = { email: email };
        // console.log(user);
        const url = `https://arcane-escarpment-94457.herokuapp.com/users/${email}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Admin Creaated Successfully..!");
                    // setChanged(true);

                }
                else {
                    alert("No User found blong to this email");
                }
            })
        e.preventDefault();
    }
    return (
        <div  >
            <Box >
                <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 700 }}>
                    Create Admin
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={makeAdminSubmitHandler}>
                        <TextField
                            onBlur={textFieldHandler}
                            type='email'
                            sx={{ mt: 4, width: '100%' }}

                            label=" Email" variant="standard" defaultValue=' ' /><br />
                        <Button type='submit' variant='contained' sx={{ px: 3, mt: 4 }}> Make Admin</Button>
                    </form>

                </Box>


            </Box>
        </div>
    );
};

export default MakeAdmin;