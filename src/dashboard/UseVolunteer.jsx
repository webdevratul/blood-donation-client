import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";

const UseVolunteer = () => {
    const { user } = useContext(authContext);
    const axiosSecure = UseAxiosSecure();

    const { data: isVolunteer } = useQuery({
        queryKey: ["isVolunteer"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/Volunteer/${user.email}`);
            console.log(res.data);
            return res.data.Volunteer;
        }
    });
    return [isVolunteer];
};

export default UseVolunteer;