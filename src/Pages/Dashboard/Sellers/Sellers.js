import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from "react-hot-toast";

const Sellers = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://resale-items-online-server.vercel.app/sellers?role=seller')
            const data = await res.json()
            return data;
        }
    })

    const handleDelete =(id) =>{
        fetch (`https://resale-items-online-server.vercel.app/users/${id}`,{
            method:"DELETE",

        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            refetch()
            toast.success('deleted successfull')
        })

        console.log(id);
    }

    if (isLoading) {
        return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
    }
    console.log(sellers);



    return (
        <div className="mt-6 w-[1000px]">
            <h2 className="text-3xl mb-4">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Admin</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, i) => (
                            <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button onClick={()=> handleDelete(seller._id)}
                                        
                                        className="btn btn-xs btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Sellers;
