import React, { useEffect, useState } from 'react';
import './AllMovies.css';
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import useFunction from './../../../../hooks/useFunction';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllMovies = () => {
    const { http } = useFunction();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        http.get('./movies')
            .then(res => {
                setMovies(res.data.movies);
            })
    }, []);


    // Movie Delete route
    const handleDelete = (e, id) => {
        e.preventDefault();
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
            <h5 className='mb-4'>Manage All Movies</h5>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <th>#SI</th>
                        <th>Movie Name</th>
                        <th>Type</th>
                        <th>Ticket Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        movies.map((movie, index) => <tr
                            key={movie._id}
                        >
                            <td>{index + 1}</td>
                            <td>{movie.movieName}</td>
                            <td>{movie.category}</td>
                            <td>$ {movie.ticketPrice}</td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-warning btn-sm'><BsPencilSquare /></a>
                                <Link to='' onClick={(e) => handleDelete(e, movie._id)} className='btn btn-danger btn-sm'><BsTrash /></Link>
                        </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllMovies;