import React, { useEffect, useState } from 'react';
import './MoviesDetails.css';
import { FaFacebookF, FaGithubAlt, FaHackerrank, FaInstagram, FaLinkedinIn, FaCalendarAlt, FaRegClock, FaHeart, FaCheck, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "odometer/themes/odometer-theme-default.css";
import Slider from "react-slick";
import useFunction from './../../hooks/useFunction';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
    const { http } = useFunction();
    let [active, setActive] = useState('summery');
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    console.log(id);

    // Handle Show Summery
    const handleShowSummeryReview = (e, active) => {

        setActive(active);
        e.preventDefault();
    }

    // Get Single Movie From MongoDB

    useEffect(() => {
        http.get('/movie/' + id)
            .then(res => setMovie(res.data))
    }, []);

    console.log(movie);


    // Odometer
    setTimeout(function () {
        let odometerTomato = document.getElementById('odometer_tomato');
        let odometerCake = document.getElementById('odometer_cake');
        odometerTomato.innerHTML = 88.00;
        odometerCake.innerHTML = 90.00;
    }, 100);

    // Slick slider
    var settings = {
        dots: false,
        pauseOnHover: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div>
            <div className="details-banner bg_img" data-background={movie.movieBanner} style={{ backgroundImage: `url(${movie.movieBanner})` }}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-thumb">
                            <img src={movie.moviePoster} alt="movie" />
                            <a href="https://www.youtube.com/embed/KGeBMAgc46E" className="video-popup">
                                <img src="https://i.ibb.co/sqNmHny/video-button.png" alt="movie" />
                            </a>
                        </div>
                        <div className="details-banner-content offset-lg-3">
                            <h3 className="title">{movie.movieName}</h3>
                            <div className="tags">
                                {
                                    movie.language?.split(',').map(lan => <a href="#0">{lan}</a>)
                                }
                            </div>
                            <a href="#0" className="button">{movie.category}</a>
                            <div className="social-and-duration">
                                <div className="duration-area">
                                    <div className="item">
                                        <FaCalendarAlt className='icon-i' /><span>{movie.showing}</span>
                                    </div>
                                    <div className="item">
                                        <FaRegClock className='icon-i' /><span>{movie.duration}</span>
                                    </div>
                                </div>
                                <ul className="social-share">
                                    <li><a href="#0"><FaFacebookF /></a></li>
                                    <li><a href="#0"><FaGithubAlt /></a></li>
                                    <li><a href="#0"><FaLinkedinIn /></a></li>
                                    <li><a href="#0"><FaHackerrank /></a></li>
                                    <li><a href="#0"><FaInstagram /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Book div */}

            <div className="book-section bg-one">
                <div className="container">
                    <div className="book-wrapper offset-lg-3">
                        <div className="left-side">
                            <div className="item">
                                <div className="item-header">
                                    <div className="thumb">
                                        <img src="http://pixner.net/boleto/demo/assets/images/movie/tomato2.png" alt="movie" />
                                    </div>
                                    <div className="counter-area">
                                        <span id="odometer_tomato" className="counter-item odometer">00</span>
                                    </div>
                                </div>
                                <p>tomatometer</p>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <div className="thumb">
                                        <img src="http://pixner.net/boleto/demo/assets/images/movie/cake2.png" alt="movie" />
                                    </div>
                                    <div className="counter-area">
                                        <span id="odometer_cake" className="counter-item odometer">00</span>
                                    </div>
                                </div>
                                <p>audience Score</p>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <h5 className="title">4.5</h5>
                                    <div className="rated">
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                    </div>
                                </div>
                                <p>Users Rating</p>
                            </div>
                            <div className="item">
                                <div className="item-header">
                                    <div className="rated rate-it">
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                        <FaHeart className='fa-heart' />
                                    </div>
                                    <h5 className="title">0.0</h5>
                                </div>
                                <p><a href="#0">Rate It</a></p>
                            </div>
                        </div>
                        <a href="#0" className="custom-button">book tickets</a>
                    </div>
                </div>
            </div>

            {/* Movie Details Section */}
            <div className="movie-details-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center flex-wrap-reverse mb--50">
                        <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
                            <div className="widget-1 widget-tags">
                                <ul>
                                    {
                                        movie.dimension?.split(',').map(din => <li>
                                            <a href="#0">{din}</a>
                                        </li>)
                                    }
                                </ul>
                            </div>
                            <div className="widget-1 widget-offer">
                                <h3 className="title">Applicable offer</h3>
                                <div className="offer-body">
                                    <div className="offer-item">
                                        <div className="thumb">
                                            <img src="http://pixner.net/boleto/demo/assets/images/sidebar/offer01.png" alt="sidebar" />
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="#0">Amazon Pay Cashback Offer</a>
                                            </h6>
                                            <p>Win Cashback Upto Rs 300*</p>
                                        </div>
                                    </div>
                                    <div className="offer-item">
                                        <div className="thumb">
                                            <img src="	http://pixner.net/boleto/demo/assets/images/sidebar/offer02.png" alt="sidebar" />
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="#0">PayPal Offer</a>
                                            </h6>
                                            <p>Transact first time with Paypal and
                                                get 100% cashback up to Rs. 500</p>
                                        </div>
                                    </div>
                                    <div className="offer-item">
                                        <div className="thumb">
                                            <img src="http://pixner.net/boleto/demo/assets/images/sidebar/offer03.png" alt="sidebar" />
                                        </div>
                                        <div className="content">
                                            <h6>
                                                <a href="#0">HDFC Bank Offer</a>
                                            </h6>
                                            <p>Get 15% discount up to INR 100*
                                                and INR 50* off on F&amp;B T&amp;C apply</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-1 widget-banner">
                                <div className="widget-1-body">
                                    <a href="#0">
                                        <img src="https://i.ibb.co/CBn9HdX/banner01.jpg" alt="banner" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 mb-50">
                            <div className="movie-details">
                                <h3 className="title">photos</h3>
                                <div className="details-photos">

                                    <Slider
                                        speed={500}
                                        arrows={false}
                                        slidesToShow={3}
                                        infinite={true}
                                        {...settings}
                                    >

                                        {
                                            movie.movieSlider?.split(',').map(simg => <div className="thumb">
                                                <a href={simg} className="img-pop">
                                                    <img src={simg} alt="movie" />
                                                </a>
                                            </div>)
                                        }
                                    </Slider>



                                    <div className="tab summery-review">
                                        <ul className="tab-menu">
                                            <li className={active === "summery" ? "active" : ""}>
                                                <a onClick={(e) => handleShowSummeryReview(e, 'summery')} href="#0">summery</a>
                                            </li>
                                            <li className={active === "review" ? "active" : ""}>
                                                <a onClick={(e) => handleShowSummeryReview(e, 'review')} href="#0">user review <span>147</span></a>
                                            </li>
                                        </ul>
                                        <div className="tab-area">


                                            <div className={active === "summery" ? "tab-item active" : "tab-item"}>
                                                <div className="item">
                                                    <h5 className="sub-title">Synopsis</h5>
                                                    <p>{movie.description} </p>
                                                </div>
                                                <div className="item">
                                                    <div className="header">
                                                        <h5 className="sub-title">cast</h5>
                                                    </div>


                                                    <div className="casting-slider">

                                                        <Slider
                                                            speed={200}
                                                            arrows={true}
                                                            slidesToShow={4}
                                                            {...settings}

                                                        >
                                                            {
                                                                movie.castImg?.split(",").map(cast => <div className="cast-item">
                                                                    <div className="cast-thumb">
                                                                    <a href="#0">
                                                                            <img src={cast} alt="cast" />
                                                                    </a>
                                                                </div>
                                                                    <div className="cast-content">
                                                                        <h6 className="cast-title"><a href="#0">Bill Hader</a></h6>
                                                                        <span className="cate">actor</span>
                                                                    <p>As raven</p>
                                                                </div>
                                                                </div>)
                                                            }
                                                        </Slider>
                                                    </div>



                                                </div>
                                                <div className="item">
                                                    <div className="header">
                                                        <h5 className="sub-title">crew</h5>
                                                    </div>
                                                    <div className="casting-slider">

                                                        <Slider
                                                            speed={400}
                                                            arrows={true}
                                                            slidesToShow={4}
                                                            {...settings}

                                                        >
                                                            {
                                                                movie.crewImg?.split(',').map(crew => <div className="cast-item">
                                                                    <div className="cast-thumb">
                                                                    <a href="#0">
                                                                            <img src={crew} alt="cast" />
                                                                    </a>
                                                                </div>
                                                                    <div className="cast-content">
                                                                        <h6 className="cast-title"><a href="#0">Bill Hader</a></h6>
                                                                        <span className="cate">actor</span>

                                                                </div>
                                                                </div>)
                                                            }

                                                        </Slider>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={active === "review" ? "tab-item active" : "tab-item"}>
                                                <div className="movie-review-item">
                                                    <div className="author">
                                                        <div className="thumb">
                                                            <a href="#0">
                                                                <img src="	http://pixner.net/boleto/demo/assets/images/cast/cast02.jpg" alt="cast" />
                                                            </a>
                                                        </div>
                                                        <div className="movie-review-info">
                                                            <span className="reply-date">13 Days Ago</span>
                                                            <h6 className="subtitle"><a href="#0">minkuk seo</a></h6>
                                                            <span><FaCheck className='fa-check' /> verified review</span>
                                                        </div>
                                                    </div>
                                                    <div className="movie-review-content">
                                                        <div className="review">
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                        </div>
                                                        <h6 className="cont-title">Awesome Movie</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                                        <div className="review-meta">
                                                            <a href="#0">
                                                                <FaThumbsUp className='thumbs-up' /><span>(8)</span>
                                                            </a>
                                                            <a href="#0" className="dislike">
                                                                <FaThumbsDown className='thumbs-down' /><span>(0)</span>
                                                            </a>
                                                            <a href="#0">
                                                                Report Abuse
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="movie-review-item">
                                                    <div className="author">
                                                        <div className="thumb">
                                                            <a href="#0">
                                                                <img src="	http://pixner.net/boleto/demo/assets/images/cast/cast04.jpg" alt="cast" />
                                                            </a>
                                                        </div>
                                                        <div className="movie-review-info">
                                                            <span className="reply-date">13 Days Ago</span>
                                                            <h6 className="subtitle"><a href="#0">rudra rai</a></h6>
                                                            <span><FaCheck className='fa-check' /> verified review</span>
                                                        </div>
                                                    </div>
                                                    <div className="movie-review-content">
                                                        <div className="review">
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                        </div>
                                                        <h6 className="cont-title">Awesome Movie</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                                        <div className="review-meta">
                                                            <a href="#0">
                                                                <FaThumbsUp className='thumbs-up' /><span>8</span>
                                                            </a>
                                                            <a href="#0" className="dislike">
                                                                <FaThumbsDown className='thumbs-down' /><span>0</span>
                                                            </a>
                                                            <a href="#0">
                                                                Report Abuse
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="movie-review-item">
                                                    <div className="author">
                                                        <div className="thumb">
                                                            <a href="#0">
                                                                <img src="	http://pixner.net/boleto/demo/assets/images/cast/cast01.jpg" alt="cast" />
                                                            </a>
                                                        </div>
                                                        <div className="movie-review-info">
                                                            <span className="reply-date">13 Days Ago</span>
                                                            <h6 className="subtitle"><a href="#0">rafuj</a></h6>
                                                            <span><FaCheck className='fa-check' /> verified review</span>
                                                        </div>
                                                    </div>
                                                    <div className="movie-review-content">
                                                        <div className="review">
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                        </div>
                                                        <h6 className="cont-title">Awesome Movie</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                                        <div className="review-meta">
                                                            <a href="#0">
                                                                <FaThumbsUp className='thumbs-up' /><span>8</span>
                                                            </a>
                                                            <a href="#0" className="dislike">
                                                                <FaThumbsDown className='thumbs-down' /><span>0</span>
                                                            </a>
                                                            <a href="#0">
                                                                Report Abuse
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="movie-review-item">
                                                    <div className="author">
                                                        <div className="thumb">
                                                            <a href="#0">
                                                                <img src="	http://pixner.net/boleto/demo/assets/images/cast/cast03.jpg" alt="cast" />
                                                            </a>
                                                        </div>
                                                        <div className="movie-review-info">
                                                            <span className="reply-date">13 Days Ago</span>
                                                            <h6 className="subtitle"><a href="#0">bela bose</a></h6>
                                                            <span><FaCheck className='fa-check' /> verified review</span>
                                                        </div>
                                                    </div>
                                                    <div className="movie-review-content">
                                                        <div className="review">
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                            <FaHeart className='fa-heart' />
                                                        </div>
                                                        <h6 className="cont-title">Awesome Movie</h6>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </p>
                                                        <div className="review-meta">
                                                            <a href="#0">
                                                                <FaThumbsUp className='thumbs-up' /><span>8</span>
                                                            </a>
                                                            <a href="#0" className="dislike">
                                                                <FaThumbsDown className='thumbs-down' /><span>0</span>
                                                            </a>
                                                            <a href="#0">
                                                                Report Abuse
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="load-more text-center">
                                                    <a href="#0" className="custom-button transparent">load more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesDetails;