import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";



const UseDonner = () => {
    const { user } = useContext(authContext);
    const axiosSecure = UseAxiosSecure();

    const { data: isDonner } = useQuery({
        queryKey: ["isDonner"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/donner/${user.email}`);
            console.log(res.data);
            return res.data.donner;
        }
    });
    return [isDonner];
};

export default UseDonner;