import React from 'react';
import './ManageOrders.css';
import { BsTrash, BsCheck2Circle } from "react-icons/bs";
import { Badge } from 'react-bootstrap';

const ManageOrders = () => {
    return (
        <div className='my-orders-sec'>
            <h5 className='mb-4'>Manage All Orders</h5>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <td>#SI</td>
                        <td>Customer Name</td>
                        <td>Movie Name</td>
                        <td>Date</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Hasibul Hasan</td>
                        <td>Harry Potter</td>
                        <td>12/02/2023</td>
                        <td>
                            <Badge bg="success">Completed..</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-success disabled' ><BsCheck2Circle /></a>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Hasibul Hasan</td>
                        <td>Harry Potter</td>
                        <td>12/02/2023</td>
                        <td>
                            <Badge bg="danger">Pending..</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-success'><BsCheck2Circle /></a>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Hasibul Hasan</td>
                        <td>Harry Potter</td>
                        <td>12/02/2023</td>
                        <td>
                            <Badge bg="danger">Pending..</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-success'><BsCheck2Circle /></a>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Hasibul Hasan</td>
                        <td>Harry Potter</td>
                        <td>12/02/2023</td>
                        <td>
                            <Badge bg="danger">Pending..</Badge>
                        </td>
                        <td className='d-flex gap-2'>
                            <a href="#0" className='btn btn-success'><BsCheck2Circle /></a>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>



                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;