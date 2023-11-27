import { Link } from "react-router-dom";
import { FaUser, FaUsers } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaSearchLocation } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import UseAdmin from "./UseAdmin";
/* import UseVolunteer from "./UseVolunteer"; */
import UseDonner from "./UseDonner";

const Dashboard = () => {
    const { user } = useContext(authContext);
    const [isAdmin] = UseAdmin();
    /* const [isVolunteer] = UseVolunteer(); */
    const [isDonner] = UseDonner();

    console.log(isDonner);

    return (
        <div className="left-side w-[100%] md:w-[50%] lg:w-[35%] xl:w-[30%] 2xl:w-[18%] h-auto bg-[#242529] text-white border-r-8 border-black pt-20 pb-[201px]">
            <img className="w-[90px] h-[90px] ml-8 rounded-full border-4 border-[#E8E8EA] mb-4 object-cover" src={user ? user?.photoURL : "https://i.ibb.co/0V9X3qw/IMG-20230905-122859.jpg"} alt="" />
            <div className="pt-6 flex flex-col gap-y-8 text-xl">
                {
                    isAdmin &&
                    <>
                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <FaUser></FaUser>
                                <span className="hover:text-[#EA062B] transition">Home</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <AiFillHeart></AiFillHeart>
                                <span className="hover:text-[#EA062B] transition">Donation Request</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <FaBloggerB></FaBloggerB>
                                <span className="hover:text-[#EA062B] transition">Blog</span>
                            </Link>
                        </div>

                        <div className="">
                            <Link className="flex items-center gap-3 pl-8" to="/featured">
                                <FaBloggerB></FaBloggerB>
                                <span className="hover:text-[#EA062B] transition">Featured</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/contact">
                                <IoMdContacts></IoMdContacts>
                                <span className="hover:text-[#EA062B] transition">Contact</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <FaSearchLocation></FaSearchLocation>
                                <span className="hover:text-[#EA062B] transition">Search</span>
                            </Link>
                        </div>

                        <div className="w-[90%] h-[0.10px] rounded-2xl mx-auto bg-gray-400 hidden lg:block"></div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard">
                                <IoHome></IoHome>
                                <span className="hover:text-[#EA062B] transition">Dashboard Home</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard">
                                <FaUser></FaUser>
                                <span className="hover:text-[#EA062B] transition">Profile</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard/allUsers">
                                <FaUsers></FaUsers>
                                <span className="hover:text-[#EA062B] transition">All Users</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard/createDonationRequest">
                                <MdCreateNewFolder></MdCreateNewFolder>
                                <span className="hover:text-[#EA062B] transition">Create Donation Request</span>
                            </Link>
                        </div>
                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard/myDonationAll">
                                <MdCreateNewFolder></MdCreateNewFolder>
                                <span className="hover:text-[#EA062B] transition">My Donation Request</span>
                            </Link>
                        </div>
                    </>
                }

                {
                    isDonner &&
                    <>
                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <FaUser></FaUser>
                                <span className="hover:text-[#EA062B] transition">Home</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <AiFillHeart></AiFillHeart>
                                <span className="hover:text-[#EA062B] transition">Donation Request</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <FaBloggerB></FaBloggerB>
                                <span className="hover:text-[#EA062B] transition">Blog</span>
                            </Link>
                        </div>

                        <div className="">
                            <Link className="flex items-center gap-3 pl-8" to="/featured">
                                <FaBloggerB></FaBloggerB>
                                <span className="hover:text-[#EA062B] transition">Featured</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/contact">
                                <IoMdContacts></IoMdContacts>
                                <span className="hover:text-[#EA062B] transition">Contact</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/">
                                <FaSearchLocation></FaSearchLocation>
                                <span className="hover:text-[#EA062B] transition">Search</span>
                            </Link>
                        </div>

                        <div className="w-[90%] h-[0.10px] rounded-2xl mx-auto bg-gray-400 hidden lg:block"></div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard">
                                <IoHome></IoHome>
                                <span className="hover:text-[#EA062B] transition">Dashboard Home</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard">
                                <FaUser></FaUser>
                                <span className="hover:text-[#EA062B] transition">Profile</span>
                            </Link>
                        </div>

                        <div>
                            <Link className="flex items-center gap-3 pl-8" to="/dashboard/createDonationRequest">
                                <MdCreateNewFolder></MdCreateNewFolder>
                                <span className="hover:text-[#EA062B] transition">Create Donation Request</span>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Dashboard;