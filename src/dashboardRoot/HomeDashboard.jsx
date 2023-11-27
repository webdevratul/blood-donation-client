import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";

const HomeDashboard = () => {
    const { user } = useContext(authContext);

    return (
        <div className="bg-[#E3E3E3] w-[82%]">
            <h2 className="ml-10 my-16 text-5xl font-extrabold">Welcome {user?.displayName}</h2>
        </div>
    );
};

export default HomeDashboard;