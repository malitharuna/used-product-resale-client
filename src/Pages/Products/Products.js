
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Products = () => {

  const products = useLoaderData();
  console.log(products);


  return (
<div className='p-0 mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>
      {
        products.map(product => <div key={product._id} className="card bg-base-100 text-left shadow-2xl ">
          <figure className="px-10 pt-10">
            <img src={product.Img} alt="MotorCycle" className="rounded-xl" />
          </figure>
          <div className="card-body text-left ">
            <h2 className="card-title bg-red-500 text-white p-2 mx-2 rounded-xl  m-">{product.Brand}</h2>
            <h3>Model : {product.model}</h3>
            <p>Color: {product.color}</p>
            <p>Condition: {product.condition}</p>
            <p>Engine Capacity: {product.Enginecapacity}</p>
            <p>Year of Manufacture:{product.YearofManufacture}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        )
      }
    </div>
</div>

  );
};

export default Products;