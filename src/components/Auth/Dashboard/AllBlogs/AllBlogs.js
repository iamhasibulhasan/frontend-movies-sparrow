import React from 'react';
import './AllBlogs.css';
import { Badge } from 'react-bootstrap';
import { BsTrash, BsPencilSquare } from "react-icons/bs";

const AllBlogs = () => {
    return (
        <div>
            <h5 className='mb-4'>Manage All Blogs</h5>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <td>#SI</td>
                        <td>Blog Title</td>
                        <td>Type</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Harry Potter</td>
                        <td>Mystery</td>
                        <td>
                            <Badge bg="success">Published</Badge>
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
                        <td>
                            <Badge bg="danger">Unpublished</Badge>
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
                        <td>
                            <Badge bg="success">Published</Badge>
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
                        <td>
                            <Badge bg="success">Published</Badge>
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

export default AllBlogs;