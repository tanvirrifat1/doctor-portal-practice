import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email'
                            {...register("email", {
                                required: 'Email is required'
                            })}
                            className="input input-bordered input-primary w-full " />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password'
                            {...register("password", {
                                required: 'password is required',
                                minLength: { value: 6, message: 'password must be 6 character' }
                            })}
                            className="input input-bordered input-primary w-full " />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input type="submit" value='login' className='btn btn-active btn-info w-full text-white' />
                </form>

                <p className='mt-2'>New to Doctors Portal <Link className='text-primary' to='/signup'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-secondary w-full"><FaGoogle className='text-2xl mr-2'></FaGoogle>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;