import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';

const Sellers = () => {
    const { user } = useContext(AuthContext);

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://resale-items-online-server.vercel.app/sellers?role=seller')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
    }
    console.log(sellers);

    return (
        <div>
            <div className="overflow-x-auto w-[1000px]">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Pay</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{<button className='btn btn-xs btn-accent'> Verify</button>}</td>  
                            
                            </tr>

                            )
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;