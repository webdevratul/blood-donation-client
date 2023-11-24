/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
    return (
        <div className="bg-[#E7E7E7]">
            <div className="text-center py-10 w-[100%] md:w-[50%] mx-auto">
                <div className="p-2">
                    <h2 className=" text-[#EA062B] text-3xl font-bold">Get In Touch </h2>
                    <h2 className="text-5xl font-extrabold py-8">Hey, Let's Talk</h2>
                    <p className="text-xl">usce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.</p>
                </div>

                <form className="w-[100%] py-6 pr-6 pl-2 md:pr-0 md:pl-0">
                    <input className=" w-[100%]  xl:w-[48%] px-2 py-3 border outline-none m-2" type="text" name="name" placeholder="Name:" />
                    <input className=" w-[100%] xl:w-[48%] px-2 py-3 border outline-none m-2" type="email" name="name" placeholder="E-mail:" />
                    <br />
                    <textarea name="" id="" className=" w-[100%] xl:w-[98%] h-36 px-2 py-2 m-2 border outline-none"></textarea>
                    <button className="uppercase mx-auto bg-[#EA062B] py-4 px-8 text-white font-semibold my-4 text-xl rounded-full">Get In Tuch</button>
                </form>

            </div>
        </div>
    );
};

export default Contact;

