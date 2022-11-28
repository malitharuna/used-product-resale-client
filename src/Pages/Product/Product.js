
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Product = () => {

  const products = useLoaderData();
  console.log(products);


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto py-6'>
      {
        products.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={product.Img} alt="MotorCycle" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.Brand}</h2>
            <p>{product.color}</p>
            <p>{product.condition}</p>
            <p>{product.Enginecapacity}</p>
            <p>{product.YearofManufacture}</p>
            <p >{product.EngineCapacity}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        )
      }
    </div>

  );
};

export default Product;