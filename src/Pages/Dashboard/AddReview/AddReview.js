import { TextField, Button } from '@mui/material';
import './AddReview.css';
import axios from 'axios';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Form } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};



const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useFirebase();
    const [rateValue, setRateValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [userImg, setUserImg] = React.useState(null)


    // handle image upload 
    const handleImgUpload = async e => {
        const imageData = new FormData();
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(response => {

                setUserImg(response.data.data.display_url);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} `,

                })
            });
    };

    // send data to database
    const onSubmit = reviewData => {
        const data = {
            name: reviewData.name,
            email: reviewData.email,
            address: reviewData.address,
            description: reviewData.description,
            img: userImg,
            ratings: rateValue
        };

        reset()
        axios.post('https://mysterious-waters-68327.herokuapp.com/review', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Review added Successfully',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    reset()
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message} `,

                })
            })

    };

    const uploadFile = () => {
        document.getElementById('uploadImg').click();
    }

    return (
        <div className="">
            <h2 className="fw-bold text-secondary ">ADD RATINGS </h2>
            <div className="bg-white shadow border-0 bg-white shadow   px-3" style={{ borderRadius: "15px", maxWidth: '700px', margin: '0 auto' }}>
                <form onSubmit={handleSubmit(onSubmit)} className=" row p-4 " style={{ borderRadius: '20px' }}>

                    <TextField className="col-12" variant="standard" placeholder="Name" fullWidth type="text" {...register("name", { maxLength: 50 })} label="Name" defaultValue={user.displayName || ""} required /> <br /><br />

                    <TextField className="col-12 mt-3" variant="standard" placeholder="Email" fullWidth type="email" {...register("email")} required label="Email" defaultValue={user.email || ""} /> <br /> <br />

                    <TextField className="col-12 mt-3" variant="standard" fullWidth {...register("address")} label="Address" required /> <br />

                    <div className="col-12 mt-5">
                        <div className=" row mb-3">
                            <div className="col-12 col-md-6">
                                <h5 className="text-start ">Add your image</h5>
                                <Button type="submit" variant="outlined" onClick={uploadFile} className="mt-4  justify-self-start d-flex  send-button">Upload image</Button>
                                <TextField id='uploadImg'
                                    hidden
                                    label="Upload Image"
                                    type="file" accept="image/*" onChange={handleImgUpload} required
                                    variant="standard" />
                            </div>

                            <div className=" col-12 col-md-6">
                                <h5 className="text-start ms-2">Rate us</h5>
                                <Box
                                    className=" d-flex align-items-center"

                                >
                                    <Rating
                                        className="fs-1 mt-2"
                                        name="hover-feedback"
                                        value={rateValue}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setRateValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {rateValue !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rateValue]}</Box>
                                    )}
                                </Box>
                            </div>

                        </div>
                    </div>
                    <Form.Label className="text-start  mt-4">Description</Form.Label>
                    <div style={{}}>
                        <TextareaAutosize
                            required
                            aria-label="minimum height"
                            minRows={5}
                            placeholder="Description"
                            className="col-12  bg-white" style={{ borderRadius: '5px' }} {...register("description",)}
                        />
                    </div>
                    <Button type="submit" variant="contained" className=" w-100  rounded-pill send-button">
                        <div className="alt-send-button">
                            <i className="fa fa-paper-plane"></i><span className="send-text">SEND REVIEW</span>
                        </div>
                    </Button>
                </form>
            </div>


        </div>
    );
};

export default AddReview;