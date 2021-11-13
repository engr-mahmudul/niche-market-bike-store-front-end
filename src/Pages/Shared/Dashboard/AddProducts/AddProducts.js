import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)

        fetch('https://arcane-escarpment-94457.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Added Product Successfully');
                    // clearTheCart();
                    reset();
                }
                else {
                    alert('Product has not been Added');
                }
            })
    };
    return (
        <div >
            <h3 className='my-3 text-center fw-bold text-success'>Provide Product Information</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Name and Model' {...register("Model", { required: true })} />
                    {errors.Model && <span className="error">This field is required</span>}
                    <input placeholder='Version' {...register("version", { required: true })} />
                    {errors.version && <span className="error">This field is required</span>}
                    <input placeholder='Description' {...register("description", { required: true })} />
                    {errors.description && <span className="error">This field is required</span>}
                    <input placeholder='Price' {...register("price", { required: true })} />
                    {errors.price && <span className="error">This field is required</span>}
                    <input placeholder='Image URL' {...register("image", { required: true })} />
                    {errors.image && <span className="error">This field is required</span>}




                    <input type="submit" value='Upload Product Info' style={{ backgroundColor: 'green', color: 'white' }} />
                </form>
            </div>
        </div>
    );
};

export default AddProducts; <h1>Add products</h1>