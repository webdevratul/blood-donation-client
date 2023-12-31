import { Link } from "react-router-dom";
import "../../assets/css/Banner.css";
import banner from "../../assets/img/banner.jpg";
import { MdArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div className="w-[100%] h-[100vh] xl:h-[85vh] text-white">
            <div className="relative">
                <img className="w-[100%] h-[100vh] xl:h-[85vh] object-cover" src={banner} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
                <div className="absolute top-14 md:top-28 2xl:top-36 left-[14%] w-[80%] xl:w-[60%] 2xl:w-[50%] text-xl">
                    <div>
                        <h1 className="text-2xl xl:text-4xl -ml-3 md:-ml-0 font-extrabold">Donate blood save life !</h1>
                        <h2 className="text-3xl xl:text-5xl -ml-3 md:-ml-0 font-extrabold py-8 text-[#EA062B]">Donate Blood and inpires others !</h2>
                        <div className="h-1 w-[100%] -ml-3 md:-ml-0 bg-white rounded-md">
                        </div>
                        <div className="py-4 flex flex-col gap-y-2">
                            <div className="flex items-center -ml-8 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl">Blood is the most precious gift that anyone can give to another person.</p>
                            </div>
                            <div className="flex items-center -ml-8 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl">Donating blood not only saves the life also save donor lives.</p>
                            </div>
                            <div className="flex items-center -ml-8 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl">The donation process from the time you arrive center until the time you leave.</p>
                            </div>
                            <div className="flex items-center -ml-8 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl">After ensuring and passed screening test successfully you will be directed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 -ml-8 md:-ml-0 flex flex-col md:flex-row gap-4">
                        <Link to="/register">
                            <button className="bg-transparent border-2  w-full md:w-auto md:px-6 py-3 text-2xl text-white uppercase font-serif">join as a donner</button>
                        </Link>
                        <Link to="/search">
                            <button className="bg-transparent border-2 w-full md:w-auto  md:px-6 py-3 text-2xl text-white uppercase font-serif">Search donner</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;