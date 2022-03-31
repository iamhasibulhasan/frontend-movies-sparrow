import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './Dashboard.css';
import { BsSpeedometer2, BsBasket3 } from "react-icons/bs";
import { BiMovie, BiEdit } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import MyOrders from './../MyOrders/MyOrders';
import ManageOrders from './../ManageOrders/ManageOrders';
import AddMovies from './../AddMovies/AddMovies';
import AddBlogs from './../AddBlogs/AddBlogs';
import { GiTicket } from "react-icons/gi";

const Dashboard = () => {
    const [active, setActive] = useState('dashboard');

    const handleContent = (e, active) => {
        setActive(active);
        e.preventDefault();
    }



    return (
        <div className="dashboard">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-lg-2 col-sm-2 dashboard-sidebar">
                    <ul>
                        <a onClick={(e) => handleContent(e, 'dashboard')} href="#0">
                            <li className={active === 'dashboard' ? 'active' : ''}><BsSpeedometer2 /> <span>Dashboard</span> </li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'myorders')} href="#0">
                            <li className={active === 'myorders' ? 'active' : ''}> <BsBasket3 /> <span>My Orders</span> </li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'manageorders')} href="#0">
                            <li className={active === 'manageorders' ? 'active' : ''}> <BiEdit /> <span>Manage Orders</span> </li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'addmovies')} href="#0">
                            <li className={active === 'addmovies' ? 'active' : ''}> <BiMovie /> <span>Add Movies</span> </li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'addblogs')} href="#0">
                            <li className={active === 'addblogs' ? 'active' : ''}> <FaBlog /> <span>Add Blogs</span> </li>
                        </a>
                    </ul>
                </div>
                <div className="col-lg-10 col-sm-10 dashboard-main-section">
                    {
                        active === 'dashboard' ?
                            <div>
                                <h5 className='mb-4'>Welcome Hasibul Hasan !!</h5>
                                <div className="row justify-content-evenly">
                                    <div className="col-lg-3 total-sec card">
                                        <div className="card-body">
                                            <div className="widget-flex">
                                                <BsSpeedometer2 className='main-sec-icon uicon' />
                                                <b>5000</b>
                                            </div><br />
                                            <span>Total Users</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 total-sec card">
                                        <div className="card-body">
                                            <div className="widget-flex">
                                                <BiMovie className='main-sec-icon micon' />
                                                <b>5000</b>
                                            </div><br />
                                            <span>Total Movies</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 total-sec card">
                                        <div className="card-body">
                                            <div className="widget-flex">
                                                <GiTicket className='main-sec-icon ticon' />
                                                <b>5000</b>
                                            </div><br />
                                            <span>Sell Tickets</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 total-sec card">
                                        <div className="card-body">
                                            <div className="widget-flex">
                                                <FaBlog className='main-sec-icon bicon' />
                                                <b>5000</b>
                                            </div><br />
                                            <span>Total Blogs</span>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            active === 'myorders' ?
                                <MyOrders></MyOrders> :
                                active === 'manageorders' ?
                                    <ManageOrders></ManageOrders> :
                                    active === 'addmovies' ?
                                        <AddMovies></AddMovies> :
                                        <AddBlogs></AddBlogs>

                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;