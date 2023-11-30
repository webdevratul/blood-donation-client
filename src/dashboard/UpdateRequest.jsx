import { useLoaderData } from "react-router-dom";
/* import UseAxiosSecure from "../hooks/UseAxiosSecure"; */
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const UpdateRequest = () => {
    const donationRequest = useLoaderData();
    const axiosSecure = UseAxiosSecure();

    const { data: district = [] } = useQuery({
        queryKey: ["district"],
        queryFn: async () => {
            const res = await axiosSecure.get("/district");
            return res.data;
        }
    });

    const { data: upazila = [] } = useQuery({
        queryKey: ["upazila"],
        queryFn: async () => {
            const res = await axiosSecure.get("/upazila");
            return res.data;
        }
    });

    const handleAddAssignmentUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const requesterEmail = form.requesterEmail.value;
        const requesterName = form.requesterName.value;
        const recipientDonnerEmail = form.recipientDonnerEmail.value;
        const recipientName = form.recipientName.value;
        const district = form.district.value;
        const upazila = form.upazila.value;
        const hospitalName = form.hospitalName.value;
        const address = form.address.value;
        const requestMessage = form.requestMessage.value;
        const date = form.date.value;
        const time = form.time.value;

        const upDateDonationRequest = { requesterName, requesterEmail, recipientDonnerEmail, recipientName, district, upazila, hospitalName, address, requestMessage, date, time }

        
        fetch(`https://blood-donation-server-rose.vercel.app/updateDonationRequest/${donationRequest?._id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(upDateDonationRequest)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Donation Request Updated Successfully !',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                    }
                });
    }


    return (
        <div className="w-[100%] md:w-[82%] bg-[#E3E3E3] py-8">
            <div className=" w-[100%] xl:w-[60%] mx-auto">
                <h2 className="text-4xl font-bold pb-8 text-center text-gray-500">Update Donation Request</h2>
                <form className="w-[82%] mx-auto" onSubmit={handleAddAssignmentUpdate}>
                    <small className="m-2 text-gray-400">Requester E-mail*</small>
                    <input className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" type="email" name="requesterEmail" defaultValue={donationRequest.requesterEmail} readOnly />

                    <br />
                    <small className="m-2 text-gray-400">Requester Name*</small>
                    <input className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" type="text" name="requesterName" defaultValue={donationRequest.requesterName} readOnly />

                    <small className="m-2 text-gray-400">Recipient Donner E-mail*</small>
                    <input className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" type="email" name="recipientDonnerEmail" required defaultValue={donationRequest.recipientDonnerEmail} />

                    <br />
                    <small className="m-2 text-gray-400">Recipient Name*</small>
                    <input className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" type="text" name="recipientName" required defaultValue={donationRequest.recipientName} />

                    <br />
                    <small className="m-2 text-gray-400">District*</small>
                    <select className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" name="district" required>
                        <option value={donationRequest.district}>{donationRequest.district}</option>
                        {
                            district?.map((district, idx) => (
                                <option key={idx} value={district.name}>{district.name}</option>
                            ))
                        }
                    </select>
                    <br />
                    <small className="m-2 text-gray-400">Upazila*</small>
                    <select className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" name="upazila" required>
                        <option value={donationRequest.upazila}>{donationRequest.upazila}</option>
                        {
                            upazila?.map((upazila, idx) => (
                                <option key={idx} value={upazila.name}>{upazila.name}</option>
                            ))
                        }
                    </select>
                    <small className="m-2 text-gray-400">HospitalName*</small>
                    <textarea className="w-[100%] h-16 bg-white outline-none rounded-md m-2 px-2 py-2" name="hospitalName" defaultValue={donationRequest.hospitalName} required></textarea>
                    <br />
                    <small className="m-2 text-gray-400">Full Address*</small>
                    <textarea className="w-[100%] h-16 bg-white outline-none rounded-md m-2 px-2 py-2" name="address" defaultValue={donationRequest.address} required></textarea>
                    <br />

                    <small className="m-2 text-gray-400">Request Message*</small>
                    <textarea className="w-[100%] h-24 bg-white outline-none rounded-md m-2 px-2 py-2" name="requestMessage" required defaultValue={donationRequest.requestMessage}></textarea>
                    <br />
                    <small className="m-2 text-gray-400">Date*</small>
                    <input className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" type="date" name="date" required />
                    <br />

                    <small className="m-2 text-gray-400">Time*</small>
                    <input className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2" type="time" name="time" required />
                    <br />

                    <input className="w-[100%] h-10 outline-none rounded-md m-2 px-2 bg-[#EA062B] text-white text-xl font-semibold cursor-pointer" type="submit" value="Submit Update" />
                </form>
            </div>
        </div>
    );
};

export default UpdateRequest;