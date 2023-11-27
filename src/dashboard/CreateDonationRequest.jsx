import { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../authProvider/AuthProvider";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import Swal from "sweetalert2";



const CreateDonationRequest = () => {

    const { user } = useContext(authContext);
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();


    const { data: district = [] } = useQuery({
        queryKey: ["district"],
        queryFn: async () => {
            const res = await axiosPublic.get("/district");
            return res.data;
        }
    });

    const { data: upazila = [] } = useQuery({
        queryKey: ["upazila"],
        queryFn: async () => {
            const res = await axiosPublic.get("/upazila");
            return res.data;
        }
    });


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const name = user?.displayName;
        const email = user?.email;
        const status = "Pending";

        const requestData = {
            requesterName: name,
            requesterEmail: email,
            recipientDonnerEmail: data.recipientDonnerEmail,
            recipientName: data.recipientName,
            district: data.district,
            upazila: data.upazila,
            hospitalName: data.hospitalName,
            address: data.address,
            requestMessage: data.requestMessage,
            date: data.date,
            time: data.time,
            status: status
        };

        const requestDataResponse = await axiosSecure.post("/donationRequest", requestData);

        if (requestDataResponse.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "You are successfully Created a Donation Request !",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            reset();
        }

    }


    return (
        <div className="bg-[#E3E3E3] h-auto w-[100%] md:w-[50%] lg:w-[75%] xl:w-[70%] 2xl:w-[82%]">
            <h2 className="text-2xl lgtext-3xl xl:text-4xl 2xl:text-5xl font-extrabold pt-16 pb-4  text-center">Create Donation Request</h2>
            <div className="w-[80%] lg:w-[60%] mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Requester Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                {...register("requesterName")}
                                readOnly
                                defaultValue={user?.displayName}
                            />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Requester Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                {...register("requesterEmail")}
                                readOnly
                                defaultValue={user?.email}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6" title="Collect from the Search Page">
                            <label className="label">
                                <span className="label-text" title="Collect from the Search Page">Recipient Donner E-mail*</span>
                            </label>
                            <input title="Collect from the Search Page"
                                type="email"
                                placeholder="Recipient Donner E-mail"
                                className="input input-bordered w-full"
                                {...register("recipientDonnerEmail", { required: true })}
                                required
                            />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Recipient Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Recipient Name"
                                className="input input-bordered w-full"
                                {...register("recipientName", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">District*</span>
                            </label>
                            <select defaultValue="Default" {...register("district", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="Default">Select District</option>
                                {
                                    district?.map((district, idx) => (
                                        <option key={idx} value={district.name}>{district.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Upazila*</span>
                            </label>
                            <select defaultValue="Default" {...register("upazila", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="Default">Select Upazila</option>
                                {
                                    upazila?.map((district, idx) => (
                                        <option key={idx} value={district.name}>{district.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Hospital Name*</span>
                            </label>
                            <textarea className="input input-bordered w-full h-20 pt-2"
                                {...register("hospitalName", { required: true })}
                                required
                                placeholder="Hospital Name"
                            >
                            </textarea>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Full Address*</span>
                            </label>
                            <textarea className="input input-bordered w-full h-20 pt-2"
                                {...register("address", { required: true })}
                                required
                                placeholder="Write Full Address"
                            >
                            </textarea>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Request Message*</span>
                            </label>
                            <textarea className="input input-bordered w-full h-20 pt-2"
                                {...register("requestMessage", { required: true })}
                                required
                                placeholder="Write Request Message"
                            >
                            </textarea>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Donation Date*</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                {...register("date", { required: true })}
                                required
                            />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Donation Time*</span>
                            </label>
                            <input
                                type="time"
                                className="input input-bordered w-full"
                                {...register("time", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <button className="w-full py-2 rounded-lg font-semibold bg-[#EA062B] text-2xl font-serif text-white my-8">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateDonationRequest;