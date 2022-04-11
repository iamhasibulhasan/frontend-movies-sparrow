import axios from "axios";


const useFunction = () => {

    const http = axios.create({
        baseURL: 'http://localhost:5000',
    });

    return {
        http,
    }
};

export default useFunction;