import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import axios from 'axios';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import { CircularProgress, Button, useMediaQuery } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // maxWidth: 750,
    bgcolor: 'background.paper',
    borderRadius: '15px',
    boxShadow: 10,
    p: 4,
};



const tableStyle = {
    borderRight: '1px solid gray'
}
const ManageProduct = () => {
    const [manageProductsAdmin, setManageProductsAdmin] = React.useState([]);
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    const [uploading, setUploading] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [productImg, setProductImg] = React.useState(null)
    const isMobile = useMediaQuery('(max-width: 480px)');

    React.useEffect(() => {
        fetch('https://mysterious-waters-68327.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProductsAdmin(data))
            .catch(error => Swal.fire({
                icon: 'error',
                title: `Set to ${error}`,
                showConfirmButton: false,
                timer: 3000
            }));
    }, []);


    // handle delete 
    const handleDeleteProduct = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://mysterious-waters-68327.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const available = manageProductsAdmin.filter(managePd => managePd._id !== id);
                            setManageProductsAdmin(available);

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'This Product has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'this file is safe :)',
                    'error'
                )
            }
        })
    };


    // Handle Update Product
    const handleImgUpload = async e => {
        const imageData = new FormData();
        console.log(e.target.files[0]);
        imageData.set('key', 'b1329658ac9cd12416e1b24f8e686347');
        await imageData.append('image', e.target.files[0])

        // axios.post('https://api.imgbb.com/1/upload',
        //     imageData)
        //     .then(response => {
        //         console.log(response.data.data.display_url);

        //         setProductImg(response.data.data.display_url);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
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
            // axios.post('http://localhost:5000/products', data)
            //     .then(res => {
            //         console.log(res);
            //         setUploading(false)
            //         if (res.data.insertedId) {
            //             Swal.fire({
            //                 position: 'top-center',
            //                 icon: 'success',
            //                 title: 'New product added Successfully',
            //                 showConfirmButton: false,
            //                 timer: 3000
            //             })
            //         }
            //         else {
            //             Swal.fire({
            //                 icon: 'error',
            //                 title: 'Oops...',
            //                 text: 'Order placed Canceled!',
            //             })
            //         }
            //     })
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
        <div>
            <h1 className="fw-bold text-primary my-4">MANAGE PRODUCTS</h1>
            <div className="container">
                <Paper elevation={5} sx={{ width: '100%', overflow: '', padding: '', borderRadius: '20px' }}>
                    <TableContainer className='' sx={{ backgroundColor: '', borderRadius: '20px' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableStyle} align="left">Image</TableCell>
                                    <TableCell style={tableStyle} align="left">Product</TableCell>
                                    <TableCell style={tableStyle} align="left">Description</TableCell>
                                    <TableCell style={tableStyle} align="left">$ Price</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {manageProductsAdmin?.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                    >
                                        <TableCell style={tableStyle} align="left"><img src={row?.img} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.name} <br /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.description.slice(0, 20)} <br /></TableCell>
                                        <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row?.price}</TableCell>
                                        <TableCell className="fw-bold fs-5 text-info bg-light" align="left">
                                            <button className="btn btn-outline-info py-1 mb-2 me-2 " onClick={handleModalOpen} ><i className="fas fa-edit me-1"></i> Update</button>

                                            <Modal
                                                className="bg-secondary update-modal"
                                                aria-labelledby="transition-modal-title"
                                                aria-describedby="transition-modal-description"
                                                open={modalOpen}
                                                onClose={handleModalClose}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 400,
                                                }}
                                            >
                                                <Fade in={modalOpen}>
                                                    <Box sx={modalStyle}>
                                                        <div className="container ">
                                                            <h6 className="fw-bold text-secondary ">UPDATE A PRODUCT</h6>
                                                            {uploading && <CircularProgress></CircularProgress>}
                                                            <div className="" >
                                                                <form onSubmit={handleSubmit(onSubmit)} className=" row form-control border-0">

                                                                    <TextField className="col-12 col-md-5 me-md-2"
                                                                        label="Product Name"
                                                                        required
                                                                        defaultValue={row?.name}
                                                                        {...register("name")}
                                                                        variant="standard" />


                                                                    <TextField className="col-12 col-md-5 ms-md-2"
                                                                        label="Product Price"
                                                                        required
                                                                        defaultValue={row?.price}
                                                                        type="number" {...register("price")}
                                                                        variant="standard" />

                                                                    <Form.Label className="text-start  mt-3">Product image</Form.Label>
                                                                    <Button type="submit" variant="outlined" onClick={uploadFile} className="  justify-self-start d-flex w-50 rounded-pill  send-button"> Set image</Button>
                                                                    <TextField id='productImg'
                                                                        className="col-12 col-md-10"
                                                                        hidden
                                                                        label="Upload Image"
                                                                        type="file" accept="image/*" onChange={handleImgUpload} required
                                                                        variant="standard" />

                                                                    <Form.Label className="text-start  mt-4">description</Form.Label>
                                                                    <TextareaAutosize
                                                                        aria-label="minimum height"
                                                                        defaultValue={row?.description.slice(0, 200)}
                                                                        minRows={5}
                                                                        placeholder="Description"
                                                                        className="col-12 col-md-12 " style={{ borderRadius: '5px', width: '100%' }} rows={10} {...register("description", { required: true })}
                                                                    />
                                                                    <Button type="submit" variant="contained" className=" w-100  rounded-pill">UPDATE</Button>

                                                                </form>
                                                            </div>

                                                        </div>
                                                    </Box>
                                                </Fade>
                                            </Modal>




                                            <button className="btn btn-outline-danger mb-2  py-1" onClick={() => handleDeleteProduct(row._id)}><i className="fas fa-trash-alt me-1"></i> Delete</button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>


        </div>
    );
};

export default ManageProduct;