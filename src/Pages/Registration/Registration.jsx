import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginRegistrationImg from '../../assets/images/login/login.svg';


const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-2/4">
                    <img src={loginRegistrationImg} className="w-3/4" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="text-3xl text-center font-bold">Registration</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="user name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Registration</button>
                        </div>
                    </form>
                    <p className='text-center text-sm font-medium text-[#444]'>Or Sign In with</p>
                    <div className='flex justify-center gap-3 my-5'>
                        <button className='text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                        <button className='text-[#0A66C2]'><FaLinkedinIn></FaLinkedinIn></button>
                        <button><FcGoogle></FcGoogle></button>
                    </div>
                    <p className='text-center'>Have an account? <Link to={"/login"}><button className="btn btn-active btn-link ">Login</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;