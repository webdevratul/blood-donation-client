import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://blood-donation-server-rose.vercel.app"
});

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;

