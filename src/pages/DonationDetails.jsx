import { BiSolidDonateHeart } from "react-icons/bi";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";


const DonationDetails = () => {

    const { user } = useContext(authContext);
    const axiosPublic = UseAxiosPublic();


    const { data: donationRequest = [] } = useQuery({
        queryKey: ["donationRequest"],
        queryFn: async () => {
            const res = await axiosPublic.get("/donationRequest");
            return res.data;
        }
    });

    const handleInProgress = request => {
        axiosPublic.patch(`/donationRequest/InProgress/${request._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Request Confirmed Now !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                }
            });
    }

    let founddonationRequest = donationRequest.filter((request) => request.recipientDonnerEmail === user?.email);



    return (
        <div className="py-24 bg-slate-100">
            {
                founddonationRequest.length > 0 ?
                    <>

                        <h2 className="text-center mb-10 text-3xl lg:text-4xl font-extrabold text-gray-500">Details of All requests sent to you</h2>
                        {
                            founddonationRequest.map((request, idx) => <div key={idx} className="card card-side bg-base-100  mx-auto my-4 w-[70%]">
                                <div className="card-body">
                                    <p> <span className="font-bold">Requester Name:</span> {request.requesterName} </p>

                                    <p className="my-4"><span className="font-bold">Requester E-mail:</span> {request.requesterEmail}</p>

                                    <p><span className="font-bold">RecipientName Name:</span> {request.recipientName} </p>

                                    <p className="mt-4"><span className="font-bold">HospitalName Name:</span> {request.hospitalName}</p>


                                    <p className="my-4"><span className="font-bold">Full Address:</span> {request.address}</p>

                                    <p>{request.status}</p>

                                    <p><span className="font-bold">District:</span> {request.district}</p>

                                    <p className="my-4"><span className="font-bold">Upazila:</span> {request.upazila}</p>

                                    <p className="mb-4"><span className="font-bold">Request Message: </span> {request.requestMessage}</p>

                                    <div>
                                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-red-600 text-white text-xl px-6 py-3 rounded-full my-8">Donate <BiSolidDonateHeart className="inline"></BiSolidDonateHeart> </button>
                                    </div>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form>
                                                <input type="text" className="w-full px-4 h-12 rounded-full border-none bg-gray-100 outline-none" readOnly defaultValue={user.displayName} />
                                                <br />
                                                <br />
                                                <input type="email" className="w-full px-4 h-12 rounded-full border-none bg-gray-100 outline-none" readOnly defaultValue={user.email} />
                                            </form>
                                            <div className="modal-action">
                                                <form method="dialog" className="mx-auto">
                                                    <button onClick={() => handleInProgress(request)} className="my-4 rounded-full bg-red-600 text-white px-6 py-2">Confirm Request</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </div>)
                        }

                    </>
                    :
                    <h2 className="text-center mb-10 text-3xl lg:text-4xl font-extrabold text-gray-500">You have not any details of request</h2>
            }
        </div>
    );
};

export default DonationDetails;