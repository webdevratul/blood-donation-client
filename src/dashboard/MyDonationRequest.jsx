import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MyDonationRequest = () => {
    const { user } = useContext(authContext);
    const axiosSecure = UseAxiosSecure();

    const { data: donationRequest = [] } = useQuery({
        queryKey: ["donationRequest"],
        queryFn: async () => {
            const res = await axiosSecure.get("/donationRequest");
            return res.data;
        }
    });



    let founddonationRequest = donationRequest.filter((request) => request.recipientDonnerEmail === user?.email);
    return (
        <div className="w-[100%] md:w-[50%] lg:w-[70%] 2xl:w-[82%] bg-[#E3E3E3] mx-auto pb-12">
            <h2 className="text-center  mt-28 mb-10 text-3xl lg:text-4xl font-extrabold">All requests sent to you</h2>
            {
                founddonationRequest.length === 0 ? <h2 className="text-center text-3xl font-semibold">Not Yet Request</h2> : <div className="overflow-x-auto">
                    <div className="w-[70%] mx-auto">
                        <table className="table table-zebra">
                            <thead className="text-black text-[16px]">
                                <tr>
                                    <th>#</th>
                                    <th>Recipient Name</th>
                                    <th>District</th>
                                    <th>Upazila</th>
                                    <th>Donation Date</th>
                                    <th>Donation Time</th>
                                    <th>Status</th>
                                    <th>Get Action</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    founddonationRequest?.map((request, index) => <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{request.recipientName}</td>
                                        <td>{request.district}</td>
                                        <td>{request.upazila}</td>
                                        <td>{request.date}</td>
                                        <td>{request.time}</td>
                                        <td>
                                            <button className="bg-yellow-500 px-2 py-1 text-white rounded-full">{request.status}</button>
                                        </td>
                                        <td className="flex gap-2">
                                            <button className="bg-blue-500 px-2 py-1 text-white rounded-full">Update</button>
                                            <button className="bg-red-500 px-2 py-1 text-white rounded-full">Delete</button>
                                        </td>
                                        <td>
                                            <button className="bg-green-500 px-2 py-1 text-white rounded-full">View</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyDonationRequest;