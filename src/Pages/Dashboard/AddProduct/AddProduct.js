import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import { CircularProgress, Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const AddProduct = () => {
    const [uploading, setUploading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [productImg, setProductImg] = useState(null)

    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {
                console.log(response.data.data.display_url);

                setProductImg(response.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const onSubmit = productData => {
        const data = {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            img: productImg
        };

        reset()
        setUploading(true)
        axios.post('https://powerful-wildwood-39472.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                setUploading(false)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'New product added Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Order placed Canceled!',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error}`,
                })
            })

    };

    const uploadFile = () => {
        document.getElementById('productImg').click();
    }

    return (
        <div className="container ">
            <h2 className="fw-bold text-secondary ">PLEASE ADD A PRODUCT</h2>
            {uploading && <CircularProgress></CircularProgress>}

            <div className=" py-3" >
                <form onSubmit={handleSubmit(onSubmit)} className=" row form-control border-0 bg-white shadow  py-4 px-3" style={{ maxWidth: '700px', margin: 'auto', borderRadius: '20px' }}>

                    <TextField className="col-12 col-md-5 me-md-2"
                        label="Product Name"
                        required
                        {...register("name")}
                        variant="standard" />


                    <TextField className="col-12 col-md-5 ms-md-2"
                        label="Product Price"
                        required
                        type="number" {...register("price")}
                        variant="standard" />

                    <Form.Label className="text-start  mt-3">Product image</Form.Label>
                    <Button type="submit" variant="outlined" onClick={uploadFile} className=" w-25 justify-self-start d-flex   send-button">Upload image</Button>
                    <TextField id='productImg'
                        className="col-12 col-md-10"
                        hidden
                        label="Upload Image"
                        type="file" accept="image/*" onChange={handleImgUpload} required
                        variant="standard" />

                    <Form.Label className="text-start  mt-4">Description</Form.Label>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Description"
                        className="col-12 col-md-12 " style={{ borderRadius: '5px', width: '100%' }} rows={10} {...register("description", { required: true })}
                    />
                    <Button type="submit" variant="contained" className=" w-100  rounded-pill">ADD PRODUCT</Button>

                </form>
            </div>

        </div>
    );
};

export default AddProduct;