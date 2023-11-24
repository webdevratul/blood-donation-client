import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillCaretRight, AiTwotoneMail } from "react-icons/ai";
import post1 from "../assets/img/f1.jpg";
import post2 from "../assets/img/f2.jpg";





const Footer = () => {
    return (
        <div className="w-[100%] bg-[#111111] py-24 text-white">
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Language <span className="text-[#EA062B]">School</span> </h2>
                    <p className="mb-4">Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur</p>
                    <div className="flex gap-x-4 justify-center md:justify-start mb-4">
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <AiTwotoneMail className="mx-auto text-[#EA062B]"></AiTwotoneMail>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaFacebook className="mx-auto text-[#EA062B]"></FaFacebook>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaInstagram className="mx-auto text-[#EA062B]"></FaInstagram>
                        </p>
                    </div>
                </div>
                <div className="md:ml-14 mx-auto md:mx-0 mb-4">
                    <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Home</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Donation Request</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Blog</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Featured</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Conatct</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto md:mx-0 mb-4">
                    <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Blood Donation</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Health Check</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Blood Bank</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Blood Info</p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#EA062B]"></AiFillCaretRight>
                            <p className="text-xl">Group</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-4">Latest Post</h2>
                    <div>
                        <div className="flex item items-center mb-4">
                            <img className="w-[100px] h-[80px] object-cover" src={post1} alt="" />
                            <h5 className="ml-2">A Formula For Help And Happiness</h5>
                        </div>
                        <div className="flex items-center">
                            <img className="w-[120px] h-[80px] object-cover" src={post2} alt="" />
                            <h5 className="ml-2">Donation is hope for poor helpless children </h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[80%] mx-auto h-1 border-none rounded-xl bg-white mt-10" />
            <h2 className="text-center mt-10 text-2xl font-bold">All Rights Reserved by &copy; Donation <span className="text-[#EA062B]">Campaign</span> </h2>
        </div>
    );
};

export default Footer;