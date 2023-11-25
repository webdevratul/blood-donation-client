import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Featured from "../components/pages/Featured";
import Contact from "../components/pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
    }
]);