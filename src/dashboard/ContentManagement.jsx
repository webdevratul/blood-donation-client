import { Link } from "react-router-dom";


const ContentManagement = () => {
    return (

        <div className="m-10">
            <Link to="/dashboard/contentManagement/addBlog">
                <button className="bg-gray-500 px-6 py-3 text-xl text-white rounded-full">Add Blog</button>
            </Link>
        </div>

    );
};

export default ContentManagement;