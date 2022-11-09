import React from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.gif'
const SignUp = () => {
    const handleSignup=event=>{
        event.preventDefault();
    }
    return (
        <div className="hero w-full my-20 ">
        <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">

                <img className='w-3/4' src={loginimg} alt='' />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                <h1 className="text-5xl text-center font-bold">Sign up</h1>
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email'required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' required placeholder="password" className="input input-bordered" />
                       
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-warning  bg-orange-600" type="submit" value='Sign up' />

                    </div>
                </form>
                <p className='text-center'>Already have an account<Link className='text-orange-600 font-bold' to='/login'>Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;