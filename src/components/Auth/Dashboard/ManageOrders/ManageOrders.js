import React from 'react';
import './ManageOrders.css';
import { BsTrash, BsCheck2Circle } from "react-icons/bs";
import { Badge, Modal, Button } from 'react-bootstrap';
import DataTable, { createTheme } from 'react-data-table-component';
import { Link } from 'react-router-dom';
import useFunction from './../../../../hooks/useFunction';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ManageOrders = () => {
    const { http } = useFunction();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        http.get('/orders')
            .then(res => {
                setMovies(res.data)
            })
    }, [movies]);


    // Order Status Update route
    const handleOrderStatus = (e, id) => {

        http.patch('/status', {
            id: id,
            status: 1
        }).then(res => {
            if (res.data.modifiedCount) {
                let timerInterval
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    title: 'Updating order status.',
                    html: 'Update in <b></b> milliseconds.',
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                })
            }

        })


        e.preventDefault();
    }


    // Order Delete route
    const handleDelete = (e, id) => {
        e.preventDefault();
        // console.log(id);

        Swal.fire({
            toast: true,
            position: 'top-end',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // Api called
                http.delete('/order/' + id)
                    .then(res => {
                        console.log(res.data.deletedCount);

                        if (res.data.deletedCount == 1) {
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: 'Deleted successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else {
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'error',
                                title: 'Order data not found.',
                                text: 'Please try again.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })



            }
        })

    }


    // Data table
    const columns = [
        {
            name: 'Movie Name',
            selector: row => row.movieName,
        },
        {
            name: 'Location',
            selector: row => row.movieHall,
        },
        {
            name: 'Dimension',
            selector: row => row.dimension,
        },
        {
            name: 'Ticket (+vat)',
            selector: row => '$ ' + row.totalPrice,
        },
        {
            name: 'Status',
            selector: row => row.status == 0 ? <Badge bg="danger">Pending...</Badge> : <Badge bg="success">Completed</Badge>,
        },
        {
            name: 'Action',
            selector: row => <span><Link to='' onClick={(e) => handleOrderStatus(e, row._id)} className={`${row.status == 1 ? 'btn btn-success btn-sm disabled' : 'btn btn-success btn-sm'}`}><BsCheck2Circle /></Link>  <Link to='' onClick={(e) => handleDelete(e, row._id)} className='btn btn-danger btn-sm'><BsTrash /></Link></span>,


        }
    ];


    createTheme('solarized', {
        text: {
            primary: '#268bd2',
            secondary: '#2aa198',
        },
        background: {
            default: '#032055',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#073642',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');

    // Data table ends
    return (
        <div className='manage-orders-sec'>
            <div className="dataTable">
                <DataTable
                    title='Manage All Orders'
                    columns={columns}
                    data={movies}
                    pointerOnHover
                    theme="solarized"
                    direction="auto"
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    highlightOnHover
                    pagination
                    persistTableHead
                    responsive
                />
            </div>
        </div>
    );
};

export default ManageOrders;