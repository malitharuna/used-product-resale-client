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
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import AdminRoute from "../PrivateRoute/AdminRoute";
import SellerRoute from "../PrivateRoute/SellerRoute";

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
                fetch(`https://resale-items-online-server.vercel.app/product/${params.brand}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
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
            {    path: '/dashboard/allusers',
                element: <PrivateRoute>
                    <AdminRoute><AllUsers></AllUsers></AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/sellers',
                element: <PrivateRoute>
                    <AdminRoute><Sellers></Sellers></AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <PrivateRoute>
                    <SellerRoute><AddProduct></AddProduct></SellerRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <PrivateRoute>
                    <AdminRoute><Buyers></Buyers></AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <PrivateRoute>
                    <SellerRoute>
                    <MyProduct></MyProduct>
                    </SellerRoute>
                </PrivateRoute>
            },
        ]
    },
])

export default router;