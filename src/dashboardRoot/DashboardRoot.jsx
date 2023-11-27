import { Outlet } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";


const DashboardRoot = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardRoot;