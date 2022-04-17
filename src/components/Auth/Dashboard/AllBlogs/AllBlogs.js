import React, { useState, useEffect } from 'react';
import './AllBlogs.css';
import { Badge } from 'react-bootstrap';
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import useFunction from './../../../../hooks/useFunction';
import DataTable, { createTheme } from 'react-data-table-component';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllBlogs = () => {
    const { http } = useFunction();
    const [blogs, setBlogs] = useState([]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // load all blogs from db
    useEffect(() => {
        http.get('/blogs')
            .then(res => {
                setBlogs(res.data.blogs);
            })
    }, [blogs]);

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
                http.delete('/blog/' + id)
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
                                title: 'Blog data not found.',
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
            name: 'Blogs Title',
            selector: row => row.blogTitle,
        },
        {
            name: 'Posted',
            selector: row => months[new Date(row.postDate).getMonth()] + ', ' + new Date(row.postDate).getDate() + " " + new Date(row.postDate).getFullYear(),
        },
        {
            name: 'Author',
            selector: row => row.author,
        },
        {
            name: 'Action',
            selector: row => <Link to='' onClick={(e) => handleDelete(e, row._id)} className='btn btn-danger btn-sm'><BsTrash /></Link>,


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
        <div className='all-blogs-list-sec'>
            <div className="dataTable">
                <DataTable
                    title='All Blog List'
                    columns={columns}
                    data={blogs}
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

export default AllBlogs;