import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authContext);
    if (loading) {
        return <div className="w-[100px] mx-auto mt-96 z-20">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;