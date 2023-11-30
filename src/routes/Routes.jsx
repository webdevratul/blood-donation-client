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
import UpdateRequest from "../dashboard/UpdateRequest";
import ContentManagement from "../dashboard/ContentManagement";
import AddBlog from "../dashboard/AddBlog";
import Profile from "../dashboard/Profile";
import Blog from "../pages/Blog";
import BloodDonationRequest from "../pages/BloodDonationRequest";
import ViewDetails from "../pages/ViewDetails";
import Search from "../pages/Search";
import DonationDetails from "../pages/DonationDetails";
import Funding from "../pages/Funding";




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
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/bloodDonationRequest",
                element: <BloodDonationRequest></BloodDonationRequest>
            },
            {
                path: "/search",
                element: <Search></Search>
            },
            {
                path: "/funding",
                element: <PrivateRoutes><Funding></Funding></PrivateRoutes>
            },
            {
                path: "/bloodDonationRequest/viewDetails/:id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blood-donation-server-rose.vercel.app/donationRequest/${params.id}`)
            },
            {
                path: "/details",
                element: <PrivateRoutes><DonationDetails></DonationDetails></PrivateRoutes>
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
            {
                path: "/dashboard/updateRequest/:id",
                element: <PrivateRoutes><UpdateRequest></UpdateRequest></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://blood-donation-server-rose.vercel.app/donationRequest/${params.id}`)
            },
            {
                path: "/dashboard/contentManagement",
                element: <PrivateRoutes><ContentManagement></ContentManagement></PrivateRoutes>
            },
            {
                path: "/dashboard/contentManagement/addBlog",
                element: <PrivateRoutes><AddBlog></AddBlog></PrivateRoutes>
            },
            {
                path: "/dashboard/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },

        ]
    }
]);