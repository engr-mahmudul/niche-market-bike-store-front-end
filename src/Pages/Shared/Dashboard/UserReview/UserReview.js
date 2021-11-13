import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [product, setProduct] = useState({});
    const onSubmit = data => {

        fetch('https://arcane-escarpment-94457.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Review has been Recieved..!');

                    reset();
                }
            })
    };


    return (
        <div >
            <h3 className='my-3 text-center fw-bold text-success'>Inform Us Your Views</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <textarea placeholder="Address" defaultValue="" {...register("comment")} placeholder='Put here your commnet' />
                    <input placeholder="City" placeholder='Rate us Between (1-5)' type='number' {...register("ratings",)} />


                    <input type="submit" value='Review Submit' style={{ backgroundColor: 'green', color: 'white' }} />
                </form>
            </div>
        </div>
    );
};

export default UserReview;