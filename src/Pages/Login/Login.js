import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
                setLoginError(error.message);
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 bordered-200'>
                <h2 className='text-3xl'>Please Login Here</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Your Email</span> </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs mb-4">
                        <label className="label"> <span className="label-text">Your Password</span> </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input className=' btn btn-outline mt-3 ' value='Login' type="submit" />

                    <div>
                        {loginError && <p className='text-red-400'>{loginError}</p>}
                    </div>
                </form>
                <p>New  to this Site <Link className='text-primary' to='/register'>Create Account </Link></p>
            </div>
        </div>
    );
};
export default Login;