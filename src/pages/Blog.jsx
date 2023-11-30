import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../hooks/UseAxiosPublic";
import { FaAnglesRight } from "react-icons/fa6";


const Blog = () => {
    const axiosPublic = UseAxiosPublic();
    const { data: blogPost = [] } = useQuery({
        queryKey: ["blogPost"],
        queryFn: async () => {
            const res = await axiosPublic.get("/blogPost");
            return res.data;
        }
    });

    let foundBlogPost = blogPost.filter((blog) => blog.status === "published");


    return (
        <div className="w-[100%] bg-gray-100 py-20">
            <div className='w-[68%] mx-auto'>
                <h2 className="text-3xl 2xl:text-5xl font-extrabold text-gray-500 text-center my-8">Read Posts and Blogs</h2>
                {
                    foundBlogPost.length > 0 ?
                        <div className='grid grid-cols-1 gap-4'>
                            {
                                foundBlogPost.map((blog, idx) => <div key={idx} className="card card-side bg-base-100 shadow my-4 flex flex-col">
                                    <img className='h-[200px] rounded-t-xl object-cover' src={blog?.image} alt="Movie" />
                                    <div className="card-body">
                                        <h2 className="card-title text-[25px] text-gray-500">{blog.title}</h2>
                                        <p className='text-gray-500 pt-8'>{blog?.content}</p>
                                        <div>
                                            <button className="bg-blue-600 text-white text-xl px-6 py-3 rounded-full my-8">Read More <FaAnglesRight className="inline"></FaAnglesRight> </button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div> : <h2 className='text-center font-semibold text-gray-500 text-4xl'>Not Yet Post</h2>
                }
            </div>

        </div>
    );
};

export default Blog;