import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner'



const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { userLogin, googleLogin, loading } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('')

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data)
        setSignUPError('')
        userLogin(data.email, data.password)
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
                toast.success('login successful0', { autoClose: 500 })
            })
            .catch(err => {
                console.error(err)
                setSignUPError(err.message)
                // loading(false)
                toast.error('password Wrong', { autoClose: 1000 })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {
                console.error(err)
                setSignUPError(err)
            })
    }

    if (loading) {
        return <div className='flex justify-center mt-12'>
            <RotatingLines
                height={80}
                width={80}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
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
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}                    </div>
                </form>

                <p className='mt-2'>New to Doctors Portal <Link className='text-primary' to='/signup'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full"><FaGoogle className='text-2xl mr-2'></FaGoogle>CONTINUE WITH GOOGLE</button>
                <button className="btn btn-outline btn-primary w-full mt-3"><FaGithub className='text-2xl mr-2'></FaGithub>CONTINUE WITH GITHUB</button>

            </div>
        </div>
    );
};

export default Login;