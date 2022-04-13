import React, { useEffect, useState } from 'react';
import './AllMovies.css';
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import useFunction from './../../../../hooks/useFunction';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import DataTable, { createTheme } from 'react-data-table-component';

const AllMovies = () => {
    const { http } = useFunction();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        http.get('./movies')
            .then(res => {
                setMovies(res.data.movies);
            })
    }, []);


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
            selector: row => <span><a href="#0" className='btn btn-warning btn-sm'><BsPencilSquare /></a>  <Link to='' onClick={(e) => handleDelete(e, row._id)} className='btn btn-danger btn-sm'><BsTrash /></Link></span>,


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
                                title: 'Your work has been saved',
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
        </div>
    );
};

export default AllMovies;