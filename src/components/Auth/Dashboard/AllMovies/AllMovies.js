import React from 'react';
import './AllMovies.css';
import { Badge } from 'react-bootstrap';
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const AllMovies = () => {
    return (
        <div className='all-movie-list-sec'>
            <h5 className='mb-4'>Manage All Movies</h5>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <td>#SI</td>
                        <td>Movie Name</td>
                        <td>Type</td>
                        <td>Price</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Harry Potter</td>
                        <td>Mystery</td>
                        <td>200</td>
                        <td>
                            <Badge bg="success">Active</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-warning btn-sm'><BsPencilSquare /></a>
                            <a href="#0" className='btn btn-danger btn-sm'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Hobbit Ring</td>
                        <td>Adventure</td>
                        <td>500</td>
                        <td>
                            <Badge bg="danger">Inactive</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-warning btn-sm'><BsPencilSquare /></a>
                            <a href="#0" className='btn btn-danger btn-sm'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Agnee 2</td>
                        <td>Action</td>
                        <td>800</td>
                        <td>
                            <Badge bg="success">Active</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-warning btn-sm'><BsPencilSquare /></a>
                            <a href="#0" className='btn btn-danger btn-sm'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Alone</td>
                        <td>Horror</td>
                        <td>300</td>
                        <td>
                            <Badge bg="success">Active</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-warning btn-sm'><BsPencilSquare /></a>
                            <a href="#0" className='btn btn-danger btn-sm'><BsTrash /></a>
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>
    );
};

export default AllMovies;