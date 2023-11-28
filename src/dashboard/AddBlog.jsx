import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';


import { useForm } from "react-hook-form";
import UseAxiosSecure from '../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import UseAdmin from './UseAdmin';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("");
    const axiosSecure = UseAxiosSecure();
    const [isAdmin] = UseAdmin();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        const res = await axiosSecure.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });

        if (res.data.success) {
            const status = "draft";
            const blogData = {
                title: data.title,
                content: content,
                image: res.data.data.display_url,
                status: status
            };
            const blogResponse = await axiosSecure.post("/blogPost", blogData);
            if (blogResponse.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You are successfully Created a blog Post !",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                reset();
                refetch();
            }
        }
    }

    const { data: blogPost = [], refetch } = useQuery({
        queryKey: ["blogPost"],
        queryFn: async () => {
            const res = await axiosSecure.get("/blogPost");
            return res.data;
        }
    });

    const handlePublish = blog => {
        axiosSecure.patch(`/blogPost/publish/${blog?._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your post has been published !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handleUnPublish = blog => {
        axiosSecure.patch(`/blogPost/unPublish/${blog?._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Your post has been Unpublished !`,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    refetch();
                }
            });
    }

    const handleDelete = (blog) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/blogPost/${blog?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted !",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }


    return (

        <div className="w-[100%] md:[70%] 2xl:w-[82%] bg-gray-200">
            <div className="w-[100%] lg:w-[70%] mx-auto p-6">
                <h2 className="text-3xl 2xl:text-5xl font-extrabold text-gray-500 mt-10 text-center">Create Blog Post</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-6">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-xl text-gray-500">Title*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered w-full"
                                {...register("title", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="my-6 w-full">
                            <label className="label">
                                <span className="label-text text-xl text-gray-500">Thumbnail Image*</span>
                            </label>
                            <input type="file"
                                className="w-full"
                                {...register("image", { required: true })}
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <div>
                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                        />
                    </div>
                    <button className="w-full py-2 rounded-lg font-semibold bg-gray-500 text-2xl font-serif text-white my-8">
                        Submit Blog
                    </button>
                </form>
            </div>

            <div className='w-[68%] mx-auto my-20'>
                <h2 className="text-3xl 2xl:text-5xl font-extrabold text-gray-500 mt-10 text-center my-8">Your Blog Post</h2>

                {
                    blogPost.length > 0 ?
                        <div className='grid grid-cols-1 gap-4'>
                            {
                                blogPost.map((blog, idx) => <div key={idx} className="card card-side bg-base-100 shadow my-4 flex flex-col">
                                    <img className='h-[200px] rounded-t-xl object-cover' src={blog?.image} alt="Movie" />
                                    <div className="card-body">
                                        <h2 className="card-title text-[25px] text-gray-500">{blog.title}</h2>
                                        <p className='text-gray-500'>{blog?.content}</p>
                                        {
                                            isAdmin &&
                                            <div>
                                                {
                                                    blog?.status == "draft" ? <button onClick={() => handlePublish(blog)} className='bg-blue-500 my-8 px-6 py-3 rounded-full text-white font-semibold'>Publish</button> :
                                                        <button onClick={() => handleUnPublish(blog)} className='bg-blue-500 my-8 px-6 py-3 rounded-full text-white font-semibold'>UnPublish</button>
                                                }

                                                <button onClick={() => handleDelete(blog)} className='bg-red-500 my-8 px-6 py-3 rounded-full text-white font-semibold ml-2'>Delete</button>
                                            </div>
                                        }
                                    </div>

                                </div>)
                            }
                        </div> : <h2 className='text-center font-semibold text-gray-500 text-4xl'>Not Yet Post</h2>
                }


            </div>

        </div>

    );
};

export default AddBlog;