import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Featured from "../components/pages/Featured";
import Contact from "../components/pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardRoot from "../dashboardRoot/DashboardRoot";
import CreateDonationRequest from "../dashboard/CreateDonationRequest";
import HomeDashboard from "../dashboardRoot/HomeDashboard";
import MyDonationRequest from "../dashboard/MyDonationRequest";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../dashboard/AllUsers";
import AllDonationRequest from "../dashboard/AllDonationRequest";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/featured",
                element: <Featured></Featured>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashboardRoot></DashboardRoot></PrivateRoutes>,
        children: [
            {
                path: "/dashboard/createDonationRequest",
                element: <PrivateRoutes><CreateDonationRequest></CreateDonationRequest></PrivateRoutes>
            },
            {
                path: "/dashboard",
                element: <PrivateRoutes><HomeDashboard></HomeDashboard></PrivateRoutes>
            },
            {
                path: "/dashboard/myDonationRequest",
                element: <PrivateRoutes><MyDonationRequest></MyDonationRequest></PrivateRoutes>
            },
            {
                path: "/dashboard/allUsers",
                element: <PrivateRoutes><AllUsers></AllUsers></PrivateRoutes>
            },
            {
                path: "/dashboard/myDonationAll",
                element: <PrivateRoutes><AllDonationRequest></AllDonationRequest></PrivateRoutes>
            },
        ]
    }
]);