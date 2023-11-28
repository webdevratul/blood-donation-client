import Swal from "sweetalert2";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import UseAdmin from "./UseAdmin";
import UseVolunteer from "./UseVolunteer";


const AllDonationRequest = () => {

    const axiosSecure = UseAxiosSecure();
    const { data: alldonationRequest = [], refetch } = useQuery({
        queryKey: ["alldonationRequest"],
        queryFn: async () => {
            const res = await axiosSecure.get("/donationRequest");
            return res.data;
        }
    });

    const [isAdmin] = UseAdmin();
    const [isVolunteer] = UseVolunteer();


    const handleInProgress = request => {
        axiosSecure.patch(`/donationRequest/InProgress/${request._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request InProgressed Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handleCancel = request => {
        axiosSecure.patch(`/donationRequest/Canceled/${request._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request Canceled Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handlePending = request => {
        axiosSecure.patch(`/donationRequest/Pending/${request._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request Pending Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/donationRequest/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Donation Request has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div className="w-[100%] md:w-[50%] lg:w-[70%] 2xl:w-[82%] bg-[#E3E3E3] mx-auto pb-12">
            <h2 className="text-center  mt-28 mb-10 text-3xl lg:text-4xl font-extrabold text-gray-500">All requests sent to you</h2>
            {
                alldonationRequest.length === 0 ? <h2 className="text-center text-3xl font-semibold">Not Yet Request</h2> : <div className="overflow-x-auto">
                    <div className="w-[82%] mx-auto">
                        <table className="table table-zebra">
                            <thead className="text-[16px]">
                                <tr>
                                    <th>#</th>
                                    <th>Recipient Name</th>
                                    <th>District</th>
                                    <th>Upazila</th>
                                    <th>Donation Date</th>
                                    <th>Donation Time</th>
                                    {isAdmin && <th>Set Status</th>}
                                    <th>Get Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alldonationRequest?.map((request, index) => <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{request.recipientName}</td>
                                        <td>{request.district}</td>
                                        <td>{request.upazila}</td>
                                        <td>{request.date}</td>
                                        <td>{request.time}</td>
                                        {
                                            isAdmin &&
                                            <td>
                                                {
                                                    request.status === "Pending" ?
                                                        <>
                                                            <div className="flex">
                                                                <button onClick={() => handleInProgress(request)} className="bg-blue-500 px-2 py-1 text-white rounded-full">InProgress</button>
                                                                <button onClick={() => handleCancel(request)} className="bg-red-500 px-2 py-1 text-white rounded-full ml-2">Cancel</button>
                                                            </div>
                                                        </>

                                                        : request.status === "InProgress" ?
                                                            <button onClick={() => handleCancel(request)} className="bg-yellow-500 px-2 py-1 text-white rounded-full ml-2">Cancel</button>
                                                            : request.status === "Done" ?
                                                                <button className="bg-yellow-500 px-2 py-1 text-white rounded-full ">Accepted</button> :
                                                                <button onClick={() => handlePending(request)} className="bg-yellow-500 px-2 py-1 text-white rounded-full ml-2">Pending</button>
                                                }
                                            </td>

                                        }

                                        {
                                            isAdmin &&
                                            <td className="flex gap-2">
                                                <Link to={`/dashboard/updateRequest/${request?._id}`}>
                                                    <button className="bg-blue-500 px-2 py-1 text-white rounded-full">Update</button>
                                                </Link>
                                                <button onClick={() => handleDelete(request?._id)} className="bg-red-500 px-2 py-1 text-white rounded-full">Delete</button>
                                            </td>
                                        }

                                        {
                                            isVolunteer &&
                                            <td>
                                                <Link to={`/dashboard/updateRequest/${request?._id}`}>
                                                    <button className="bg-blue-500 px-2 py-1 text-white rounded-full">Update</button>
                                                </Link>
                                            </td>
                                        }


                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div >
    );
};

export default AllDonationRequest;