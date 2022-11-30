import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import { signInWithPopup } from 'firebase/auth';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleHandler } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (data) => {
        console.log(data)
        setRegisterError('')
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUserDataDatabase(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message)
            });
    }

    const handleGoogleSignIn = () => {
        googleHandler()
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUserDataDatabase(user.displayName, user.email);
                navigate('/');
                console.log(user);
            })
             

            .catch(error => {
                console.log(error)
            })
        console.log('Signed in with Google');
    }

    const saveUserDataDatabase = (name, email, role) => {
        console.log(name, email, role);

        const user = {
            name: name,
            email: email,
            role: typeof role == "undefined" ? 'buyer' : role,
        }
        fetch('https://resale-items-online-server.vercel.app/addUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("User register success")
                navigate('/')
                //  setCreatedUserEmail(email) 
            })

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
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password includes uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="role" className='font-bold'>Register As</label>

                        <select {...register("role", { required: 'User role is required' })} className='my-4 btn btn-outline  w-full'>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>

                    <input className=' btn btn-outline my-4 w-full' value='Register' type="submit" />
                    <button onClick={handleGoogleSignIn} className='btn btn-success w-full'>CONTINUE WITH GOOGLE </button>

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