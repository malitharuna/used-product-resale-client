import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email)

// if(isAdminLoading){
//     return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
// }
    console.log(isAdmin);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>Orders</Link></li>
    
                        {isAdmin && (
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li>
                                    <Link to="/dashboard/sellers">All Sellers</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/buyers">All Buyers</Link>
                                </li>
                            </>
                        )}
                        {isSeller && (
                            <>
                                <li>
                                    <Link to="/dashboard/myproduct">My Product </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addproduct">Add Product</Link>
                                </li>
                            </>
                        )}
                  
                        
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;