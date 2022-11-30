import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from "react-hot-toast";

const Buyers = () => {
    const { user } = useContext(AuthContext)

    const { data: buyers = [], isLoading , refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://resale-items-online-server.vercel.app/buyers?role=buyer')
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
    console.log(buyers);

    return (
        <div className="mt-6 w-[1000px]">
            <h2 className="text-3xl mb-4">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>                         
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((buyer, i) => (
                            <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                               
                               <td>
                                    <button  onClick={()=>handleDelete(buyer._id)} className="btn btn-xs btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Buyers;