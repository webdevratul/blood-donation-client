import featured1 from "../../assets/img/featured1.jpg";
import featured3 from "../../assets/img/featured3.jpg";
import d1 from "../../assets/img/d1.png";
import d2 from "../../assets/img/d2.png";
import d3 from "../../assets/img/d3.png";

const Featured = () => {
    return (
        <div className="bg-[#E7E7E7]">
            <div className="text-center py-16 w-[90%] md:w-[60%] mx-auto">
                <h2 className="text-5xl font-extrabold py-8">Our Featured</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-8 gap-y-4 py-10">
                    <div className="bg-white shadow-2xl relative cursor-pointer">
                        <div className="p-4">
                            <img src={featured3} alt="" />
                            <h4 className="pt-24 text-2xl font-bold">Blood Donation Campaign</h4>
                            <p className="py-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
                        </div>
                        <img className="bg-[#EA062B] absolute hidden xl:block top-[35%] p-6 left-[38%]" src={d2} alt="" />
                        <button className="w-full bg-[#EA062B] py-4 text-xl text-white font-semibold">Read More</button>
                    </div>
                    
                    <div className="bg-white shadow-2xl relative cursor-pointer">
                        <div className="p-4">
                            <img src={featured1} alt="" />
                            <h4 className="pt-24 text-2xl font-bold">Health Check Facilities</h4>
                            <p className="py-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
                        </div>
                        <img className="bg-[#EA062B] absolute hidden xl:block top-[35%] px-8 py-4 left-[38%]" src={d1} alt="" />
                        <button className="w-full hover:bg-[#] bg-[#EA062B] py-4 text-xl text-white font-semibold">Read More</button>
                    </div>

                    <div className="bg-white shadow-2xl relative cursor-pointer">
                        <div className="p-4">
                            <img src={featured3} alt="" />
                            <h4 className="pt-24 text-2xl font-bold">Blood Info Provide</h4>
                            <p className="py-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
                        </div>
                        <img className="bg-[#EA062B] absolute hidden xl:block top-[35%] p-6 left-[38%]" src={d3} alt="" />
                        <button className="w-full bg-[#EA062B] py-4 text-xl text-white font-semibold">Read More</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Featured;