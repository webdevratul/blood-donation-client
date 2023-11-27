
import { useContext, useState } from "react";
import servicesBanner from "../assets/img/services-banner.png";
import { useForm } from "react-hook-form";
import { authContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {

    const { createuser, profileUpdate, setLoading } = useContext(authContext);

    const [registerError, setRegisterError] = useState("");
    const axiosPublic = UseAxiosPublic();
    const axiosSecure = UseAxiosSecure();

    const [registerLoader, setRegisterLoader] = useState(true);

    const navigate = useNavigate();

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
        if (data) {
            setRegisterLoader(false);
        }
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        if (res.data.success) {

            const role = "donner";
            const status = "active";

            const RegisterData = {
                name: data.name,
                email: data.email,
                image: res.data.data.display_url,
                bloodGrp: data.bloodGrp,
                district: data.district,
                upazila: data.upazila,
                role: role,
                status: status
            };

            const menuRes = await axiosSecure.post("/user", RegisterData);
            if (menuRes.data.insertedId) {

                const name = data.name;
                const image = res.data.data.display_url;
                const email = data.email;
                const password = data.password;
                const retypePassword = data.cPassword;

                if (password === retypePassword) {
                    if (password.length < 6) {
                        setRegisterError("Password length must be at least 6 characters");
                        setRegisterLoader(true);
                    } else {
                        createuser(email, password)
                            .then((result) => {
                                if (result.user) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "You are successfully Registered as a Donner !",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true,
                                    });
                                    setRegisterLoader(true);
                                    reset();
                                    setRegisterError("");
                                    navigate("/");

                                    profileUpdate(name, image);
                                    setLoading(false);

                                }
                            })
                            .catch((error) => {
                                setRegisterError(error.message);
                                setRegisterLoader(true);
                            });
                    }
                } else {
                    setRegisterError("Password & Confirm Password not Matched !")
                    setRegisterLoader(true);
                }
            }
        }
    }

    return (
        <div className="bg-[#E7E7E7] py-24 flex flex-col lg:flex-row justify-center items-center gap-x-32">
            <div className="w-[90%] lg:w-[30%] mb-0" data-aos="fade-down-right">
                <div className="w-[90%] h-[50vh] bg-[#EA062B] rounded-2xl relative mt-20">
                    <img className="w-[100%] h-[50vh] rounded-2xl absolute top-[-10%] left-[8%] object-cover bg-red-800" src={servicesBanner} alt="" />
                </div>
            </div>
            <div className="w-[100%] lg:w-[40%] p-6">
                <h2 className="text-3xl 2xl:text-5xl font-extrabold">Register as a donner 🥰</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {
                        registerError && <div role="alert" className="alert alert-error mt-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{registerError}</span>
                        </div>
                    }
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                {...register("name", { required: true })}
                                required
                            />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="input input-bordered w-full"
                                {...register("email", { required: true })}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="my-6 w-full">
                            <label className="label">
                                <span className="label-text">Avatar*</span>
                            </label>
                            <input type="file"
                                className="file-input w-full max-w-xs"
                                {...register("image", { required: true })}
                                required
                            />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Blood Group*</span>
                            </label>
                            <select defaultValue="Default" {...register("bloodGrp", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="Default">Select Group</option>
                                <option value="A+">A+</option>
                                <option value="A+">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O_</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-6">
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
                                    upazila?.map((upazila, idx) => (
                                        <option key={idx} value={upazila.name}>{upazila.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">password*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register("password", { required: true })}
                                required
                            />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Confirm Password*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full"
                                {...register("cPassword", { required: true })}
                                required
                            />
                        </div>
                    </div>

                    <button className="w-full py-2 rounded-lg font-semibold bg-[#EA062B] text-2xl font-serif text-white my-8">
                        {
                            registerLoader ? "Register" : <span className="loading loading-spinner loading-md"></span>
                        }

                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;

