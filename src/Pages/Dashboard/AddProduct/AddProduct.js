import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: categories, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: async () => {
            const res = await fetch("https://resale-items-online-server.vercel.app/category");
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <div className='h-6 w-6 border-2 border-blue-600 border-dashed rounded-full'></div>
    }

    //   console.log(categories);

    const addProductHandler = (data) => {
        const { Brand, category_id, description, location, originalPrice, productCondition, productImg, productName, resalePrice, sellerEmail, sellerName, yearOfPurchase } = data;

        const image = data.productImg[0];
        const formData = new FormData();
        formData.append('image', image);
        console.log(data);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imageKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data);
                    const productInfo = {
                        Brand:Brand,
                        color: 'black',
                        
                        description,
                        selling_address:location,
                        originalPrice,
                        condition:productCondition,
                        Img:data.data.url, 
                        model:productName,
                        price:resalePrice, 
                        seller_info:{
                            email:sellerEmail,
                            name: sellerName},
                        
                            YearofManufacture:yearOfPurchase,
                    };

                    console.log(productInfo);
                        
                    fetch(`https://resale-items-online-server.vercel.app/addproduct`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productInfo)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        if(result.acknowledged){
                            
                            toast.success('add product success')
                        }

                    })
    
                }
            })
};

return (
    <div className='flex justify-center items-center w-full '>
        <div className="p-8 rounded border border-gray-200 w-full">
            <div className='flex justify-between'>
                <h1 className="font-medium text-gray-800 font-serif text-3xl">Add Product</h1>
            </div>
            <form onSubmit={handleSubmit(addProductHandler)}>
                <div className="mt-8 grid lg:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="Brand" className="text-sm text-gray-700 block mb-1 font-medium">Brand</label>

                        <select {...register('Brand')} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" >
                            <option>Please select a Brand</option>
                            {
                                categories?.map(category => <option key={category._id} value={category.Brand}>{category.Brand}</option>)
                            }

                        </select>

                    </div>

                    <div>
                        <label htmlFor="productName" className="text-sm text-gray-700 block mb-1 font-medium">Product Name</label>
                        <input {...register('productName', { required: 'Provide your proudct name' })} type="text" name="productName" id="productName" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="product name" />
                        {errors.productName && <label className='text-red-600 text-left' >{errors.productName?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="originalPrice" className="text-sm text-gray-700 block mb-1 font-medium">Original Price</label>
                        <input {...register('originalPrice', {
                            required: 'Please enter originalPrice'
                        })} type="text" name="originalPrice" id="originalPrice" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder=" original price" />
                        {errors.originalPrice && <label className='text-red-600 text-left' >{errors.originalPrice?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="resalePrice" className="text-sm text-gray-700 block mb-1 font-medium">Resale Price</label>
                        <input {...register('resalePrice', {
                            required: 'Please enter Resale Price'
                        })} type="text" name="resalePrice" id="resalePrice" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder=" resale Price" />
                        {errors.resalePrice && <label className='text-red-600 text-left' >{errors.resalePrice?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="yearOfPurchase" className="text-sm text-gray-700 block mb-1 font-medium">Purches Year</label>
                        <input {...register('yearOfPurchase', {
                            required: 'Please enter purches year'
                        })} type="text" name="yearOfPurchase" id="yearOfPurchase" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder=" year Of Purchase" />
                        {errors.yearOfPurchase && <label className='text-red-600 text-left' >{errors.yearOfPurchase?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="productCondition" className="text-sm text-gray-700 block mb-1 font-medium">Condition</label>
                        <select {...register('productCondition', {
                            required: 'select your product Condition'
                        })} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Car Registration Year">
                            <option >Select product condition</option>
                            <option value='Exellent'>Exellent</option>
                            <option value='Good'>Good</option>
                            <option value='Fair'>Fair</option>

                        </select>
                        {errors.productCondition && <label className='text-red-600 text-left' >{errors.productCondition?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="sellerMobile" className="text-sm text-gray-700 block mb-1 font-medium">Seller Mobile</label>
                        <input {...register('sellerMobile', { required: 'Please provide seller mobile number' })} type="text" name="sellerMobile" id="sellerMobile" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="seller Mobile" />
                        {errors.productCondition && <label className='text-red-600 text-left' >{errors.productCondition?.message}</label>}
                    </div>


                    <div>
                        <label htmlFor="sellerEmail" className="text-sm text-gray-700 block mb-1 font-medium">Seller Name</label>
                        <input {...register('sellerName', { required: 'Please provide seller email' })} type="text" name="sellerName" id="sellerName" value={user?.displayName} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                        {errors.sellerName && <label className='text-red-600 text-left' >{errors.sellerName?.message}</label>}
                    </div>



                    <div>
                        <label htmlFor="sellerEmail" className="text-sm text-gray-700 block mb-1 font-medium">Seller Email</label>
                        <input {...register('sellerEmail', { required: 'Please provide seller email' })} type="text" name="sellerEmail" id="sellerEmail" value={user?.email} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                        {errors.sellerEmail && <label className='text-red-600 text-left' >{errors.sellerEmail?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="location" className="text-sm text-gray-700 block mb-1 font-medium">Location</label>
                        <input {...register('location', { required: 'Please provide location info' })} type="text" name="location" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="location info" />
                        {errors.location && <label className='text-red-600 text-left' >{errors.location?.message}</label>}
                    </div>

                    <div>
                        <label htmlFor="productImg" className="text-sm text-gray-700 block mb-1 font-medium"> Choose your Motorcycle image</label>
                        <input {...register('productImg', { required: 'Please Choose product image' })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.productImg && <label className='text-red-600 text-left' >{errors.productImg?.message}</label>}
                    </div>
                </div>

                <div className='w-full mt-10'>
                    <label htmlFor="description" className="text-sm text-gray-700 block mb-1 font-medium">Description</label>
                    <textarea {...register('description', { required: 'Please add product description' })} className="textarea textarea-accent w-full" placeholder="description"></textarea>
                    {errors.description && <label className='text-red-600 text-left' >{errors.description?.message}</label>}
                </div>

                <div className="space-x-4 mt-8">
                    <button type="submit" className="py-2 px-4 btn-success text-white rounded  disabled:opacity-50">Add Product</button>
                </div>

            </form>

        </div>
    </div>
)}

export default AddProduct;