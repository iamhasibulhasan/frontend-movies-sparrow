import React, { useEffect, useState } from 'react';
import './MoviesSection.css';
import useFunction from './../../../hooks/useFunction';
import { Link } from 'react-router-dom';

const MoviesSection = () => {
    const { http } = useFunction();
    const [movies, setMovies] = useState([]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        http.get('/movies')
            .then(res => setMovies(res.data.movies))
    }, []);

    // console.log(movies);
    return (
        <section className="movie-section padding-top padding-bottom bg-two">
            <div className="container">
                <div className="row flex-wrap-reverse justify-content-center">
                    <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0 my-5">
                        <div className="widget-1 widget-facility">
                            <div className="widget-1-body">
                                <ul>
                                    <li>
                                        <a href="#0">
                                            <span className="img"><img src="https://i.ibb.co/TvHkPph/sidebar01.png" alt="sidebar" /></span>
                                            <span className="cate">24X7 Care</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span className="img"><img src="https://i.ibb.co/V9rs9vG/sidebar02.png" alt="sidebar" /></span>
                                            <span className="cate">100% Assurance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <span className="img"><img src="https://i.ibb.co/KxcT3kw/sidebar03.png" alt="sidebar" /></span>
                                            <span className="cate">Our Promise</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-1 widget-banner">
                            <div className="widget-1-body">
                                <a href="#0">
                                    <img src="https://i.ibb.co/CBn9HdX/banner01.jpg" alt="banner" />
                                </a>
                            </div>
                        </div>
                        <div className="widget-1 widget-trending-search">
                            <h3 className="title">Trending Searches</h3>
                            <div className="widget-1-body">
                                <ul>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">mars</a>
                                        </h6>
                                        <p>Movies</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">alone</a>
                                        </h6>
                                        <p>Movies</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">music event</a>
                                        </h6>
                                        <p>event</p>
                                    </li>
                                    <li>
                                        <h6 className="sub-title">
                                            <a href="#0">NBA Games 2020</a>
                                        </h6>
                                        <p>Sports</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-1 widget-banner last-banner">
                            <div className="widget-1-body">
                                <a href="#0">
                                    <img src="https://i.ibb.co/b7hpZth/banner02.jpg" alt="banner" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="article-section padding-bottom">
                            <div className="section-header-1">
                                <h2 className="title">movies</h2>
                                <Link className="view-all" to="/movies">View All</Link>
                            </div>
                            <div className="row mb-30-none justify-content-center">

                                {
                                    movies.slice(0, 3).map(movie => <div key={movie._id} className="col-sm-6 col-lg-4">
                                    <div className="movie-grid">
                                        <div className="movie-thumb c-thumb">
                                                <Link to={`/movies-details/${movie._id}`}>
                                                    <img src={movie.moviePoster} alt="movie" />
                                                </Link>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                    <Link to={`/movies-details/${movie._id}`}>{movie.movieName}</Link>
                                            </h5>
                                            <ul className="movie-rating-percent">
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/P1vfm9x/tomato.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                                <li>
                                                    <div className="thumb">
                                                        <img src="https://i.ibb.co/h9Tn0CG/cake.png" alt="movie" />
                                                    </div>
                                                    <span className="content">88%</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="article-section padding-bottom">
                            <div className="section-header-1">
                                <h2 className="title">Sci-Fi</h2>
                                <Link className="view-all" to="/movies">View All</Link>
                            </div>
                            <div className="row mb-30-none justify-content-center">
                                {
                                    movies.filter(m => m.category.toLowerCase() === 'sci-fi').slice(0, 3).map(movie => <div className="col-sm-6 col-lg-4">
                                        <div className="event-grid">
                                            <div className="movie-thumb c-thumb">
                                                <Link to={`/movies-details/${movie._id}`}>
                                                    <img src={movie.moviePoster} alt="event" />
                                                </Link>
                                                <div className="event-date">
                                                    <h6 className="date-title">{new Date(movie.showing).getDate()}</h6>
                                                    <span>{months[new Date(movie.showing).getMonth()]}</span>
                                                </div>
                                            </div>
                                            <div className="movie-content bg-one">
                                                <h5 className="title m-0">
                                                    <Link to={`/movies-details/${movie._id}`}>{movie.movieName}</Link>
                                                </h5>
                                                <div className="movie-rating-percent">
                                                    <span>{movie.category} || {movie.dimension}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="article-section">
                            <div className="section-header-1">
                                <h2 className="title">Animation</h2>
                                <Link className="view-all" to="/movies">View All</Link>
                            </div>
                            <div className="row mb-30-none justify-content-center">
                                {
                                    movies.filter(m => m.category.toLowerCase() === 'animation').slice(0, 3).map(movie => <div className="col-sm-6 col-lg-4">
                                    <div className="sports-grid">
                                        <div className="movie-thumb c-thumb">
                                                <Link to={`/movies-details/${movie._id}`}>
                                                    <img src={movie.moviePoster} alt="sports" />
                                                </Link>
                                            <div className="event-date">
                                                    <h6 className="date-title">{new Date(movie.showing).getDate()}</h6>
                                                    <span>{months[new Date(movie.showing).getMonth()]}</span>
                                                </div>
                                        </div>
                                        <div className="movie-content bg-one">
                                            <h5 className="title m-0">
                                                    <Link to={`/movies-details/${movie._id}`}>{movie.movieName}</Link>
                                            </h5>
                                            <div className="movie-rating-percent">
                                                    <span>{movie.category} || {movie.dimension}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoviesSection;