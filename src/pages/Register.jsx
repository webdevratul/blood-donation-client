
import { useEffect, useState } from "react";
import servicesBanner from "../assets/img/services-banner.png";
import { useForm } from "react-hook-form";

const Register = () => {

    const [districtData, seTDistrictData] = useState();
    const [upazilaData, seTupazilaData] = useState();

    useEffect(() => {
        fetch("/districts.json")
            .then((res) => res.json())
            .then((data) => {
                seTDistrictData(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        fetch("/upazilas.json")
            .then((res) => res.json())
            .then((data) => {
                seTupazilaData(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        const retypePassword = data.cPassword;

        console.log(email,password,retypePassword);
    }
    return (
        <div className="bg-[#E7E7E7] py-24 flex flex-col lg:flex-row justify-center items-center gap-x-32">
            <div className="w-[80%] lg:w-[30%] mb-0" data-aos="fade-down-right">
                <div className="w-[90%] h-[50vh] bg-[#EA062B] rounded-2xl relative mt-20">
                    <img className="w-[100%] h-[50vh] rounded-2xl absolute top-[-10%] left-[8%] object-cover bg-red-800" src={servicesBanner} alt="" />
                </div>
            </div>
            <div className="w-[80%] lg:w-[40%] p-6">
                <h2 className="text-3xl 2xl:text-5xl font-extrabold">Register as a donner 🥰</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    districtData?.map((district, idx) => (
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
                                    upazilaData?.map((upazila, idx) => (
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
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;

