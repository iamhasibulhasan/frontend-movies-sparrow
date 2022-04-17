import React, { useState, useEffect } from 'react';
import './Blogs.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaFacebookF, FaGithubAlt, FaHackerrank, FaInstagram, FaLinkedinIn, FaComments, FaEye, FaSearch } from "react-icons/fa";
import useFunction from './../../hooks/useFunction';

const Blogs = () => {
    const { http } = useFunction();
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



    useEffect(() => {
        http.get(`/blogs?page=${page}&&size=${size}`)
            .then(res => {
                const count = res.data.count;
                setBlogs(res.data.blogs);
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });

    }, [page, size]);



    return (
        <div>
            <div className="main-page-header speaker-banner bg_img" data-background="https://i.ibb.co/F0rVdhg/banner07.jpg" style={{ backgroundImage: `url(${'https://i.ibb.co/F0rVdhg/banner07.jpg'})` }}>
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">Blogs</h2>
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/">
                                    Home &nbsp; <FaAngleDoubleRight />&nbsp;
                                </Link>
                            </li>
                            <li>
                                Blogs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-50 mb-lg-0">
                            {
                                blogs.map(blog => <article key={blog._id}>
                                <div className="post-item">
                                    <div className="post-thumb">
                                        <a href="blog-details.html">
                                                <img src={blog.blogPoster} alt="blog" />
                                        </a>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-header">
                                            <h4 className="title">
                                                <a href="blog-details.html">
                                                        {blog.blogTitle}
                                                </a>
                                            </h4>
                                            <div className="meta-post">
                                                <a href="#0" className="mr-4"><i><FaComments /></i>20 Comments</a>
                                                <a href="#0"><i><FaEye></FaEye></i>466 View</a>
                                            </div>
                                            <p>
                                                    {blog.description}
                                            </p>
                                        </div>
                                        <div className="entry-content">
                                            <div className="left">
                                                    <span className="date">{
                                                        months[new Date(blog.postDate).getMonth()] + ', ' + new Date(blog.postDate).getDate() + " " + new Date(blog.postDate).getFullYear()
                                                    } BY </span>
                                                <div className="authors">
                                                    <div className="thumb">
                                                            <a href="#0"><img src={blog.authorImg} alt="#0" /></a>
                                                    </div>
                                                        <h6 className="title"><a href="#0">{blog.author}</a></h6>
                                                </div>
                                            </div>
                                            <a href="#0" className="buttons">Read More <i className="flaticon-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                </article>)
                            }


                            <div className="pagination-area text-center">
                                <a href="#0">&#171;<span>Prev</span></a>
                                {
                                    [...Array(pageCount).keys()].map(num => <a
                                        key={num}
                                        onClick={() => setPage(num)}
                                        className={num === page ? 'active' : ''}
                                        href="#0">{num}</a>)
                                }
                                <a href="#0"><span>Next</span>&#187;</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-10 col-md-8">
                            <aside>

                                <div className="widget widget-search">
                                    <h5 className="title">search</h5>
                                    <form className="search-form">
                                        <input type="text" placeholder="Enter your Search Content" required />
                                        <button type="submit"><FaSearch /> &nbsp;Search</button>
                                    </form>
                                </div>


                                <div className="widget widget-post">
                                    <h5 className="title">latest post</h5>

                                </div>



                                <div className="widget widget-follow">
                                    <h5 className="title">Follow Us</h5>
                                    <ul className="social-icons">
                                        <li>
                                            <a href="#0" className="">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" className="">
                                                <FaGithubAlt />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" className="">
                                                <FaLinkedinIn />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" className="">
                                                <FaHackerrank />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0" className="active">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>



                                <div className="widget widget-categories">
                                    <h5 className="title">categories</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">
                                                <span>Showtimes &amp; Tickets</span><span>50</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Latest Trailers</span><span>43</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Coming Soon </span><span>34</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>In Theaters</span><span>63</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Release Calendar  </span><span>11</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Stars</span><span>30</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#0">
                                                <span>Horror Movie </span><span>55</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>



                                <div className="widget widget-tags">
                                    <h5 className="title">featured tags</h5>
                                    <ul>
                                        <li>
                                            <a href="#0">creative</a>
                                        </li>
                                        <li>
                                            <a href="#0">design</a>
                                        </li>
                                        <li>
                                            <a href="#0">skill</a>
                                        </li>
                                        <li>
                                            <a href="#0">template</a>
                                        </li>
                                        <li>
                                            <a href="#0" className="active">landing</a>
                                        </li>
                                    </ul>
                                </div>


                            </aside>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;