import { useLoaderData } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";


const ViewDetails = () => {
    const viewRequest = useLoaderData();

    return (
        <div className="py-24 bg-slate-100">
            <div className="card card-side bg-base-100 w-[70%] mx-auto">
                <div className="card-body">
                    <h2 className="card-title my-4 text-2xl">Gift of Life: Join the Blood Donation Drive</h2>

                    <p> <span className="font-bold">Requester Name:</span> {viewRequest.requesterName}</p>

                    <p className="my-4"><span className="font-bold">Requester E-mail:</span> {viewRequest.requesterEmail}</p>

                    <p><span className="font-bold">RecipientName Name:</span> {viewRequest.recipientName}</p>

                    <p className="mt-4"><span className="font-bold">HospitalName Name:</span> {viewRequest.hospitalName}</p>

                    <p className="my-4"><span className="font-bold">Full Address:</span>{viewRequest.address}</p>

                    <p><span className="font-bold">District:</span>{viewRequest.district}</p>

                    <p className="my-4"><span className="font-bold">Upazila:</span>{viewRequest.upazila}</p>

                    <p className="mb-4"><span className="font-bold">Request Message: </span> {viewRequest.requestMessage}</p>

                    <div>
                        <button className="bg-blue-600 text-white text-xl px-6 py-3 rounded-full my-8">Read More <FaAnglesRight className="inline"></FaAnglesRight> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;