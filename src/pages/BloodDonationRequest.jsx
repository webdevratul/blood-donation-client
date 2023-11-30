import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const BloodDonationRequest = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: allPendingdonationRequest = [], } = useQuery({
        queryKey: ["allPendingdonationRequest"],
        queryFn: async () => {
            const res = await axiosSecure.get("/donationRequest");
            return res.data;
        }
    });
    let pendingRequests = allPendingdonationRequest.filter((request) => request.status === "Pending");

    return (
        <div className="w-[100%] bg-[#E3E3E3] mx-auto py-32">
            <h2 className="text-center  mb-10 text-3xl lg:text-4xl font-extrabold text-gray-500">Donation Requests</h2>
            {
                pendingRequests.length === 0 ? <h2 className="text-center text-3xl font-semibold">Not Yet Request</h2> : <div className="overflow-x-auto">
                    <div className="w-[82%] mx-auto">
                        <table className="table table-zebra">
                            <thead className="text-[16px]">
                                <tr>
                                    <th>#</th>
                                    <th>Requester Name</th>
                                    <th>District</th>
                                    <th>Upazila</th>
                                    <th>Donation Date</th>
                                    <th>Donation Time</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    pendingRequests?.map((request, index) => <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{request.requesterName}</td>
                                        <td>{request.district}</td>
                                        <td>{request.upazila}</td>
                                        <td>{request.date}</td>
                                        <td>{request.time}</td>
                                        <td>
                                            <Link to={`/bloodDonationRequest/viewDetails/${request?._id}`}>
                                                <button className="bg-green-600 text-white py-1 px-2 rounded-full">View</button>
                                            </Link>
                                        </td>
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

export default BloodDonationRequest;