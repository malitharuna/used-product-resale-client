import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Buyers = () => {
    const { user } = useContext(AuthContext)

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers?role=buyer')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
    }
    console.log(buyers);

    return (
        <div>
            <h1>Buyer Info</h1>
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
                        {
                            buyers.map((buyer, i) => <tr>
                            <th>{i +1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{<button className='btn btn-xs btn-warning'> Delete</button>}</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;