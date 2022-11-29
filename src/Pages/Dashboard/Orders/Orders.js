import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ["orders" ],  //user?.email           used by Jahankar ph//
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user.email}`);
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
    }
    console.log(orders);

    return (
        <div className='bg-slate-200'>
            <h1 className='text-2xl font-bold pb-5'> My Order</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>   <tr>
                                <th>{index+1}</th>
                                <td>{order.model}</td>
                                <td>{user.email}</td>
                                <td>{order.price}</td>
                                <td>{<button className='btn btn-success btn-xs'> Pay</button>}</td>
                                <td>{<button className='btn btn-xs btn-warning'> Delete</button>}</td>  
                            </tr> )
                        }
                      
                 </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;