import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './Dashboard.css';
import { BsSpeedometer2, BsBasket3, BsListCheck } from "react-icons/bs";
import { BiMovie, BiEdit } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import MyOrders from './../MyOrders/MyOrders';
import ManageOrders from './../ManageOrders/ManageOrders';
import AddMovies from './../AddMovies/AddMovies';
import AddBlogs from './../AddBlogs/AddBlogs';
import { GiTicket } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom';
import useAuth from './../../../../hooks/useAuth';
import AllMovies from './../AllMovies/AllMovies';
import AllBlogs from '../AllBlogs/AllBlogs';

const Dashboard = () => {
    const { user } = useAuth();

    const { slug } = useParams();
    console.log(slug);
    // setActive(slug);



    return (
        <div className="dashboard">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-lg-2 col-sm-2 dashboard-sidebar">
                    <ul>

                        <Link to='/dashboard/admin'>
                            <li className={slug === 'admin' ? 'active' : ''}><BsSpeedometer2 /> <span>Dashboard</span> </li>
                        </Link>

                        <Link to='/dashboard/myorders'>
                            <li className={slug === 'myorders' ? 'active' : ''}> <BsBasket3 /> <span>My Orders</span> </li>
                        </Link>
                        <Link as={Link} to='/dashboard/manageorders'>
                            <li className={slug === 'manageorders' ? 'active' : ''}> <BiEdit /> <span>Manage Orders</span> </li>
                        </Link>
                        <Link as={Link} to='/dashboard/addmovies'>
                            <li className={slug === 'addmovies' ? 'active' : ''}> <BiMovie /> <span>Add Movies</span> </li>
                        </Link>
                        <Link as={Link} to='/dashboard/allmovies'>
                            <li className={slug === 'allmovies' ? 'active' : ''}> <MdLocalMovies /> <span>Movies List</span> </li>
                        </Link>
                        <Link as={Link} to='/dashboard/addblogs'>
                            <li className={slug === 'addblogs' ? 'active' : ''}> <FaBlog /> <span>Add Blogs</span> </li>
                        </Link>
                        <Link as={Link} to='/dashboard/allblogs'>
                            <li className={slug === 'allblogs' ? 'active' : ''}> <BsListCheck /> <span>All Blogs</span> </li>
                        </Link>


                    </ul>
                </div>
                <div className="col-lg-10 col-sm-10 dashboard-main-section">
                    {
                        slug === 'admin' ?
                            <div>
                                <h5 className='mb-4'>Welcome {user.displayName} !!</h5>
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
                            slug === 'myorders' ?
                                <MyOrders></MyOrders> :
                                slug === 'manageorders' ?
                                    <ManageOrders></ManageOrders> :
                                    slug === 'addmovies' ?
                                        <AddMovies></AddMovies> :
                                        slug === 'allmovies' ?
                                            <AllMovies></AllMovies> :
                                            slug === 'addblogs' ?
                                                <AddBlogs></AddBlogs> :
                                                slug === 'allblogs' ?
                                                    <AllBlogs></AllBlogs> : ''


                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;