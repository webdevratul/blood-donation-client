import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://blood-donation-server-rose.vercel.app',
});

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;