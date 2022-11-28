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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto py-6'>
           {
            categories.map(category =>  <Link to={`/product/${category.Brand}`} className="card bg-base-100 shadow-xl">
            <figure><img src={category.Img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Brand: {category.Brand}</h2>
            </div>
        </Link>)
           }
            
        </div>

    );
};

export default Categories;