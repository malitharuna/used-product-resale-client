import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const handleRegister = (data) => {
        console.log(data)
        setRegisterError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('Your Profile Created Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{})
            .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error);
            setRegisterError(error.message)
        });
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 bordered-200'>
                <h2 className='text-3xl'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)} >
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Your Name</span> </label>
                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Your Email</span> </label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Your Password</span> </label>
                        <input type="password" {...register("password", {
                            required: 'passworde must be provided',
                            minLength: { value: 8, message: "Password must be 8 characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password includes uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="role" className='font-bold'>Register As</label>
                        
                        <select {...register("role", {required:'User role is required'})}  className='my-4 btn btn-outline  w-full'>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>
                   
                    <input className=' btn btn-outline my-4 w-full' value='Register' type="submit" />
                    <button className='btn btn-success w-full'>CONTINUE WITH GOOGLE </button>
                    
                    <div>
                        {
                            registerError && <p className='text-red-500'>{registerError}</p>
                        }
                    </div>
                
                </form>
                <p>Already Registered <Link className='text-primary' to='/login'> Please Login </Link></p>
            </div>

        </div>
    );
};

export default Register;