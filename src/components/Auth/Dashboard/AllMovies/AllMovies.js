import React, { useEffect, useState } from 'react';
import './AllMovies.css';
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import useFunction from './../../../../hooks/useFunction';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import DataTable, { createTheme } from 'react-data-table-component';
import { Button, Modal } from 'react-bootstrap';

const AllMovies = () => {
    const { http } = useFunction();
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);
    const [editData, setEditData] = useState([]);

    useEffect(() => {
        http.get('./movies')
            .then(res => {
                setMovies(res.data.movies);
            })
    }, [movies]);




    const handleCloseModal = () => setShow(false);

    const handleShowModal = (e, id) => {
        e.preventDefault();

        movies.filter(m => m._id === id).map(edit => {

            setEditData(edit);
        })


        setShow(true);
    };

    const handleChangeName = (e) => {
        setEditData({ _id: editData._id, movieName: e.target.value, description: editData.description, ticketPrice: editData.ticketPrice, category: editData.category });


    }
    const handleChangeDes = (e) => {
        setEditData({ _id: editData._id, movieName: editData.movieName, description: e.target.value, ticketPrice: editData.ticketPrice, category: editData.category });

    }
    const handleChangePrice = (e) => {

        setEditData({ _id: editData._id, movieName: editData.movieName, description: editData.description, ticketPrice: e.target.value, category: editData.category });
    }
    const handleChangeCat = (e) => {

        setEditData({ _id: editData._id, movieName: editData.movieName, description: editData.description, ticketPrice: editData.ticketPrice, category: e.target.value });
    }

    // Movie Update route
    const handleEdit = (e) => {
        http.patch('/movie', {
            ...editData
        }).then(res => {
            // console.log(res.data.modifiedCount);
            if (res.data.modifiedCount) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Movie data modified',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Something is wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })

        handleCloseModal();
        e.preventDefault();

    }
    // Movie Delete route
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
                http.delete('/movie/' + id)
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
                                title: 'Movie data not found.',
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
            name: 'Type',
            selector: row => row.category,
        },
        {
            name: 'Ticket Price',
            selector: row => '$ ' + row.ticketPrice,
        },
        {
            name: 'Action',
            selector: row => <span><Link to='' onClick={(e) => handleShowModal(e, row._id)} className='btn btn-warning btn-sm'><BsPencilSquare /></Link>  <Link to='' onClick={(e) => handleDelete(e, row._id)} className='btn btn-danger btn-sm'><BsTrash /></Link></span>,


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
        <div className='all-movie-list-sec'>
            <div className="dataTable">
                <DataTable
                    title='All Movies List'
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
            <Modal show={show} onHide={handleCloseModal} className='text-black'>
                <form onSubmit={handleEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Movies</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input value={editData._id} type='hidden' />

                        <label htmlFor="">Movie Name</label>
                        <input onChange={handleChangeName} value={editData.movieName} className='form-control mb-4' placeholder='Movie name' />

                        <label htmlFor="">Description</label>
                        <textarea onChange={handleChangeDes} value={editData.description} className='form-control mb-4' placeholder='Description' />

                        <label htmlFor="">Ticket Price</label>
                        <input onChange={handleChangePrice} value={editData.ticketPrice} className='form-control mb-4' placeholder='Ticket price' />

                        <label htmlFor="">Category</label>
                        <input onChange={handleChangeCat} value={editData.category} className='form-control mb-4' placeholder='Category' />






                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary" onClick={handleCloseModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
};

export default AllMovies;