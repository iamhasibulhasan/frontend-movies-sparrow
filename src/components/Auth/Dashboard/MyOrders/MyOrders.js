import React from 'react';
import { Badge } from 'react-bootstrap';
import './MyOrders.css';
import { BsTrash } from "react-icons/bs";

const MyOrders = () => {
    return (
        <div className='my-orders-sec'>
            <h5 className='mb-4'>My Orders</h5>
            <table className='table table-dark table-hover'>
                <thead>
                    <tr>
                        <td>#SI</td>
                        <td>Movie Name</td>
                        <td>On Screen</td>
                        <td>Date</td>
                        <td>Hall Name</td>
                        <td>Ticket Price</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Harry Potter</td>
                        <td>13:25</td>
                        <td>12/02/2023</td>
                        <td>Balaka</td>
                        <td>$260</td>
                        <td>
                            <Badge bg="danger">Pending..</Badge>
                        </td>
                        <td>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Harry Potter</td>
                        <td>13:25</td>
                        <td>12/02/2023</td>
                        <td>Balaka</td>
                        <td>$260</td>
                        <td>
                            <Badge bg="success">Completed..</Badge>
                        </td>
                        <td>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Harry Potter</td>
                        <td>13:25</td>
                        <td>12/02/2023</td>
                        <td>Balaka</td>
                        <td>$260</td>
                        <td>
                            <Badge bg="danger">Pending..</Badge>
                        </td>
                        <td>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Harry Potter</td>
                        <td>13:25</td>
                        <td>12/02/2023</td>
                        <td>Balaka</td>
                        <td>$260</td>
                        <td>
                            <Badge bg="danger">Pending..</Badge>
                        </td>
                        <td>
                            <a href="#0" className='btn btn-danger'><BsTrash /></a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;