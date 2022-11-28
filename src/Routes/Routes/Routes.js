import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/blogs/Blog";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard//Dashboard/Dashboard";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import Product from "../../Pages/Products/Products";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Products from "../../Pages/Products/Products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/product/:brand',
                loader: ({ params }) =>
                fetch(`http://localhost:5000/product/${params.brand}`),
                element: <Products></Products>
            },
            {
                path: '*',
                element: <NotFound></NotFound>,
            },
        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Orders></Orders>
            },
            {
                path: '/dashboard/sellers',
                element: <Sellers></Sellers>
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers></Buyers>
            },
        ]
    },
])

export default router;