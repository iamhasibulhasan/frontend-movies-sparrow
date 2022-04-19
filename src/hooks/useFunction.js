import axios from "axios";
import { useState } from "react";


const useFunction = () => {

    const getMovie = () => {
        const movieString = sessionStorage.getItem('movie');
        const movieDetails = JSON.parse(movieString);

        return movieDetails;
    }
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const userDetails = JSON.parse(userString);

        return userDetails;
    }

    const getDimension = () => {
        const dimensionString = sessionStorage.getItem('dimension');
        const dimensionDetails = JSON.parse(dimensionString);

        return dimensionDetails;
    }
    const getHallCity = () => {
        const hallCityString = sessionStorage.getItem('hallCity');
        const hallCityDetails = JSON.parse(hallCityString);

        return hallCityDetails;
    }
    const getShowTime = () => {
        const showTimeString = sessionStorage.getItem('showTime');
        const showTimeDetails = JSON.parse(showTimeString);

        return showTimeDetails;
    }


    const [movie, setMovie] = useState(getMovie());
    const [user, setUser] = useState(getUser());
    const [dimension, setDimension] = useState(getDimension());
    const [hallCity, setHallCity] = useState(getHallCity());
    const [showTime, setShowTime] = useState(getShowTime());



    const setCart = (movie, user) => {
        sessionStorage.setItem('movie', JSON.stringify(movie));
        sessionStorage.setItem('user', JSON.stringify(user));
        setMovie(movie);
        setUser(user);
    }

    const setOrder = (dimension, hallCity, showTime) => {
        sessionStorage.setItem('dimension', JSON.stringify(dimension));
        sessionStorage.setItem('hallCity', JSON.stringify(hallCity));
        sessionStorage.setItem('showTime', JSON.stringify(showTime));
        setDimension(dimension);
        setHallCity(hallCity);
        setShowTime(showTime);
    }

    // Base Url Method
    const http = axios.create({
        baseURL: 'http://localhost:5000',
    });


    return {
        http,
        setCart,
        movie,
        user,
        setOrder,
        dimension,
        hallCity,
        showTime
    }


};

export default useFunction;