import "../../assets/css/Banner.css";
import banner from "../../assets/img/banner.jpg";
import { MdArrowRight } from "react-icons/md";

const Banner = () => {
    return (
        <div className="w-[100%] h-[100vh] xl:h-[84vh]">
            <div className="relative">
                <img className="w-[100%] h-[100vh] xl:h-[84vh] object-cover" src={banner} alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-75"></div>
                <div className="absolute top-28 left-[14%] w-[80%] xl:w-[60%] 2xl:w-[50%] text-xl">
                    <div>
                        <h1 className="text-2xl xl:text-4xl font-extrabold text-[#EA062B]">Donate blood save life !</h1>
                        <h2 className="text-3xl xl:text-5xl font-extrabold py-8">Donate Blood and inpires others !</h2>
                        <div className="py-1 rounded-md w-[100%] bg-[#EA062B] relative">
                        </div>
                        <div className="py-4 flex flex-col gap-y-2">
                            <div className="flex items-center -ml-5 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl font-semibold">Blood is the most precious gift that anyone can give to another person.</p>
                            </div>
                            <div className="flex items-center -ml-5 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl font-semibold">Donating blood not only saves the life also save donor lives.</p>
                            </div>
                            <div className="flex items-center -ml-5 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl font-semibold">The donation process from the time you arrive center until the time you leave.</p>
                            </div>
                            <div className="flex items-center -ml-5 xl:-ml-3">
                                <MdArrowRight className="text-4xl text-[#EA062B]" />
                                <p className="text-xl font-semibold">After ensuring and passed screening test successfully you will be directed.</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 -ml-8 md:-ml-0 flex flex-col md:flex-row gap-4">
                        <button className="bg-[#EA062B] px-6 py-3 text-xl text-white font-semibold">join as a donner</button>
                        <button className="bg-[#111111] px-6 py-3 text-xl text-white font-semibold">Search donner</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;