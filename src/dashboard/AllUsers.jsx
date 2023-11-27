import Swal from "sweetalert2";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {


    const axiosSecure = UseAxiosSecure();

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handleMakeVolunteer = user => {
        axiosSecure.patch(`/users/Volunteer/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Volunteer Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handleBlockUser = user => {
        axiosSecure.patch(`/users/blocked/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Blocked user Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }
    const handleUnBlockUser = user => {
        axiosSecure.patch(`/users/unblocked/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Active user Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    return (
        <div className="w-[100%] md:w-[50%] lg:w-[70%] 2xl:w-[82%] bg-[#E3E3E3] mx-auto pb-12">
            <h2 className="text-center  mt-28 mb-10 text-3xl lg:text-4xl font-extrabold">All Of Your Users</h2>
            <div className="overflow-x-auto">
                <div className="w-[70%] mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead className="text-[17px] text-black">
                                <tr>
                                    <th>#</th>
                                    <th>Avatar</th>
                                    <th>E-mail</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Get Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers.map((user, index) => <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.name}</td>
                                        <td>
                                            {
                                                user.status === "active" || user.status === "UnBlocked" ? <button className="bg-green-500 px-2 py-1 text-white rounded-full">Active</button> : <button className="bg-black px-2 py-1 text-white rounded-full">Blocked</button>
                                            }
                                            {
                                                user.status === "active" || user.status === "UnBlocked" ? <button onClick={() => handleBlockUser(user)} className="bg-black px-2 py-1 text-white rounded-full ml-2">Block User</button> : <button onClick={() => handleUnBlockUser(user)} className="bg-green-500 px-2 py-1 text-white rounded-full ml-2">Unblock User</button>
                                            }
                                        </td>
                                        <td className="flex gap-2">
                                            {
                                                user.role === "admin" ? <button className="bg-green-500 px-2 py-1 text-white rounded-full">Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="bg-green-500 px-2 py-1 text-white rounded-full">Make Admin</button>
                                            }
                                            {
                                                user.role === "Volunteer" ? <button className="bg-yellow-500 px-2 py-1 text-white rounded-full">Volunteer</button> :
                                                    <button onClick={() => handleMakeVolunteer(user)} className="bg-yellow-500 px-2 py-1 text-white rounded-full">Make Volunteer</button>
                                            }
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;