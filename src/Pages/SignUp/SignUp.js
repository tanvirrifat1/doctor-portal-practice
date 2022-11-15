import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../assets/images/login.png'

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { userSignup, googleLogin, updateUser, user } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('')

    const handleSignUp = data => {
        console.log(data)
        setSignUPError('')

        userSignup(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('signUp successful0', { autoClose: 500 })
                // const userInfo = {
                //     displayName: data.name,
                //     photoURL: data.url,
                // }

                updateUser(data.name, data.photoURL)
                    .then(() => {
                    })
                    .catch(er => console.error(er))
            })
            .catch(err => {
                console.error(err)
                setSignUPError(err.message)
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

    return (
        <section className='mt-32'
            style={{
                background: `url()`

            }}
        >
            <div>
                <div className='h-[800px] flex justify-center items-center'>
                    <div>
                        <h2 className='text-3xl text-center'>Sign Up</h2>
                        <form onSubmit={handleSubmit(handleSignUp)}>

                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type='text'
                                    {...register("name", {
                                    })}
                                    className="input input-bordered input-primary w-full " />
                            </div>

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
                                        minLength: { value: 6, message: 'password must be 6 character' },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })}
                                    className="input input-bordered input-primary w-full " />
                                {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                                <label className="label"><span className="label-text">Forget Password</span></label>
                            </div>


                            <div className="form-control w-full ">
                                <label className="label"><span className="label-text">Photo URL</span></label>
                                {/* <span>Photo URL</span> <input className="input  input-bordered input-info w-full max-w-xs " /> */}
                                <input type='text'
                                    {...register("photoURL", {

                                    })}
                                    className="input input-bordered input-primary w-full " placeholder="Enter PhotoURL" name='photoURL' />
                            </div>


                            <input type="submit" value='SignUp' className='btn btn-active btn-success w-full text-white mt-4' />
                            {signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </form>

                        <p className='mt-2 text-center'>Already have an Account<Link className='text-primary' to='/login'> Please Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-full"><FaGoogle className='text-2xl mr-2'></FaGoogle>CONTINUE WITH GOOGLE</button>
                        <button className="btn btn-outline btn-success w-full mt-3"><FaGithub className='text-2xl mr-2'></FaGithub>CONTINUE WITH GITHUB</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;