import { Link } from "react-router-dom";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot, FaFacebook, FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../authProvider/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(authContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const navLink = <>
        <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/">Home</Link></li>
        <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/bloodDonationRequest">Donation Request</Link></li>
        <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/blog">Blog</Link></li>
        <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/featured">Featured</Link></li>
        <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/contact">Contact</Link></li>

        {
            user &&
            <>
                <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/funding">Funding</Link></li>
                <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/details">Details</Link></li>
                <li><Link className="mx-1 hover:text-[#EA062B] transition" to="/dashboard">dashboard</Link></li>
            </>

        }
    </>

    return (
        <div>
            <div className="flex 2xl:flex-row flex-col">
                <div className="bg-[#111111] w-[100%] 2xl:w-[60%] text-white flex flex-col xl:flex-row  justify-center items-center py-4 gap-x-20 gap-y-8 text-xl font-bold border-b 2xl:border-none">
                    <div className="flex items-center gap-2">
                        <AiFillPhone />
                        <p>+01 (977) 2599 12</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiTwotoneMail />
                        <p>donation@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLocationDot />
                        <p>3146 Koontz Lane, USA</p>
                    </div>
                </div>
                <div className="bg-[#EA062B] w-[100%] 2xl:w-[40%] py-4 text-white text-xl font-bold border-b 2xl:border-none">
                    <div className="flex justify-center items-center gap-8">
                        <h2>Follow Now</h2>
                        <FaFacebook className="bg-white text-3xl text-[#EA062B] p-1" />
                        <FaXTwitter className="bg-white text-3xl text-[#EA062B] p-1" />
                        <FaInstagram className="bg-white text-3xl text-[#EA062B] p-1" />
                        <FaPinterestP className="bg-white text-3xl text-[#EA062B] p-1" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-col xl:flex-row">
                <div className="w-[100%] xl:w-[30%] bg-[#EA062B] flex justify-center items-center py-6">
                    <h2 className="text-4xl font-extrabold text-white uppercase">Donate Blood</h2>
                </div>
                <div className="w-[100%] xl:w-[70%] flex justify-center gap-x-4 2xl:gap-x-20 items-center  font-semibold py-6">
                    <ul className="flex flex-col lg:flex-row gap-1 text-[17.5px] uppercase">
                        {navLink}
                    </ul>
                    {
                        user ? <button onClick={handleSignOut} className="bg-[#111111] hover:bg-[#EA062B] px-4 py-2 text-white font-serif uppercase transition">Logout</button>
                            : <Link to="/login">
                                <button className="bg-[#111111] hover:bg-[#EA062B] px-6 py-2 text-white font-serif uppercase transition">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;