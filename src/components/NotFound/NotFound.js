import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="section-404 padding-top padding-bottom">
            <div className="container">
                <div className="thumb-404">
                    <img src="http://pixner.net/boleto/demo/assets/images/404.png" alt="404" />
                </div>
                <h3 className="title">Oops.. looks like you got lost :( </h3>
                <Link to="/" className="custom-button">Back To Home <i className="flaticon-right"></i></Link>
            </div>
        </div>
    );
};

export default NotFound;