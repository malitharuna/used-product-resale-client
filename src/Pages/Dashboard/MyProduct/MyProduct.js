import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProduct = () => {
    const {user} = useContext(AuthContext);

    
    const { data: myproduct = [], isLoading, refetch } = useQuery({
        queryKey: ['myproduct'],
        queryFn: async () => {
            const res = await fetch(`https://resale-items-online-server.vercel.app/myproduct?email=${user.email}&&name=${user.displayName}`)
            const data = await res.json()
            return data;
        }

    })

    console.log(myproduct);
    return (
        <div className='bg-slate-200 w-[1000px]'>
            <h1 className='text-2xl font-bold pb-5'> My Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Brand</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproduct.map((singleProduct, i) =>   <tr>
                                <th>{i+1}</th>
                                <td>
                                    <div className='h-20 w-20'>
                                        <img src={singleProduct.Img} alt="" />
                                    </div>
                                </td>
                                <td>
                                    <p> {singleProduct.model}</p>
                                    <p>{singleProduct.Brand}</p>
                                </td>
                                <td>{singleProduct.price}</td>
                                <td>{<button className='btn btn-success btn-xs'>Advertise</button>}</td>
                                <td>{<button className='btn btn-xs btn-warning'> Delete</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;