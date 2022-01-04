import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import Swal from 'sweetalert2'




const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    console.log(adminSuccess)

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }


    const handleMakeAdmin = (e) => {
        const user = { email };

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-info ms-2',
                cancelButton: 'btn btn-danger me-2'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be Create an a admin!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Create !',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/users/admin', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            console.log(data);
                            setEmail('');
                            setAdminSuccess(true);
                            swalWithBootstrapButtons.fire(
                                'Created',
                                'New admin created successfully.',
                                'success'
                            )
                        }
                        else if (!data.modifiedCount) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Admin create field',
                                text: ' Some problem the create make admin',
                            })
                        }
                    })
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Admin created request canceled :)',
                    'error'
                )
            }
        })
        e.preventDefault();
    }
    return (
        <div >
            <div className="container">
                <h2 className="fw-bold text-primary">CREATE A ADMIN</h2>
                <Paper elevation={5} className='w-50 p-3 mx-auto'>
                    <form onSubmit={handleMakeAdmin} className="mt-2">
                        <TextField id="admin-input"
                            className="w-100" type="email" required onChange={handleOnBlur} label="Email" variant="standard" />
                        <Button type="submit" variant="contained" className=" w-100  rounded-pill mt-3 ">
                            CREATE ADMIN
                        </Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
};

export default MakeAdmin;