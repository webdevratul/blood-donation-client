import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import UseDonner from "../dashboard/UseDonner";
import { FaUsersViewfinder } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";
import UseAdmin from "../dashboard/UseAdmin";

const HomeDashboard = () => {

    // Admin Related Coding
    const [isAdmin] = UseAdmin();



    // Donner related coding
    const { user } = useContext(authContext);
    const axiosSecure = UseAxiosSecure();
    const [isDonner] = UseDonner();
    const { data: donationRequest = [] } = useQuery({
        queryKey: ["donationRequest"],
        queryFn: async () => {
            const res = await axiosSecure.get("/donationRequest");
            return res.data;
        }
    });
    const navigate = useNavigate();
    const handleAllDonation = () => {
        navigate("/dashboard/myDonationRequest")
    }
    let founddonationRequest = donationRequest.filter((request) => request.recipientDonnerEmail === user?.email);

    return (
        <>
            {/* Admin Related Coding */}
            {
                isAdmin &&
                <div className="w-[100%] md:w-[50%] lg:w-[70%] 2xl:w-[82%] bg-[#E3E3E3] mx-auto pb-12">
                    <h2 className="ml-16 mt-28 mb-10 text-3xl lg:text-4xl font-extrabold ml-16">Welcome {user?.displayName} 🤝</h2>
                    <div>
                        <div className="w-[70%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 ml-16">
                            <div className="stats shadow h-[200px]">
                                <div className="stat">
                                    <div className="stat-title text-2xl font-bold">Total Users</div>
                                    <div className="flex gap-x-10">
                                        <div className="stat-value text-[#FF00D3] font-extrabold font-sans text-5xl">89,400</div>
                                        <FaUsersViewfinder className="text-5xl text-[#FF00D3]"></FaUsersViewfinder>
                                    </div>
                                    <div className="stat-desc text-[16px]">Here all users counted</div>
                                </div>
                            </div>
                            <div className="stats shadow h-[200px]">
                                <div className="stat">
                                    <div className="stat-title text-2xl font-bold">Total Funding</div>
                                    <div className="flex gap-x-10">
                                        <div className="stat-value text-[#FF00D3] font-extrabold font-sans text-5xl">10,00</div>
                                        <BsBriefcaseFill className="text-5xl text-[#FF00D3]"></BsBriefcaseFill>
                                    </div>
                                    <div className="stat-desc text-[16px]">Here all Funding counted</div>
                                </div>
                            </div>
                            <div className="stats shadow h-[200px]">
                                <div className="stat">
                                    <div className="stat-title text-2xl font-bold">Total Donation Request</div>
                                    <div className="flex gap-x-10">
                                        <div className="stat-value text-[#FF00D3] font-extrabold font-sans text-5xl">89,400</div>
                                        <BsChatTextFill className="text-5xl text-[#FF00D3]"></BsChatTextFill>
                                    </div>
                                    <div className="stat-desc text-[16px]">Here all users counted</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {/* Donner Related Coding */}
            {
                isDonner &&
                <div className="w-[100%] md:w-[50%] lg:w-[70%] 2xl:w-[82%] bg-[#E3E3E3] mx-auto pb-12">
                    <h2 className="text-center  mt-28 mb-10 text-3xl lg:text-4xl font-extrabold">Welcome {user?.displayName} 🤝</h2>
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
                                            founddonationRequest?.slice(0, 3).map((request, index) => <tr key={index}>
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

                    <div className="flex justify-center">
                        <button onClick={handleAllDonation} className="mt-16 bg-[#242529] px-8 py-4 rounded-full text-white text-xl">My All Donation Request</button>
                    </div>
                </div>
            }

        </>

    );
};

export default HomeDashboard;

