import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";



const UseAdmin = () => {
    const { user } = useContext(authContext);
    const axiosSecure = UseAxiosSecure();

    const { data: isAdmin } = useQuery({
        queryKey: ["isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data.admin;
        }
    });
    return [isAdmin];
};

export default UseAdmin;