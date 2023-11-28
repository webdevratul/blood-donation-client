import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../hooks/UseAxiosPublic";


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

    console.log(foundBlogPost);


    return (
        <div>
            <h2>Blog</h2>
        </div>
    );
};

export default Blog;