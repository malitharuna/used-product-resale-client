import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {

    const { data: categories, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/category");
          const data = await res.json();
          return data;
        },

      });
      if(isLoading){
        return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
      }
      
      console.log(categories);
     


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-8 px-10 bg-black'>
           {
            categories.map(category => <Link key={category._id}  to={`/product/${category.Brand}`} className="card bg-base-100 shadow-xl">
            <figure ><img className='h-60 w-50' src={category.Img} alt="logo" /></figure>
            <div className="card-body hover:bg-slate-800">
                <h2 className="card-title bg-red-600 text-xl uppercase mx-auto p-2 rounded-b">Brand: {category.Brand}</h2>
            </div>
        </Link>)
           }
            
        </div>

    );
};

export default Categories;