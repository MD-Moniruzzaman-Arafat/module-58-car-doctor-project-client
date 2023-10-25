import { FcGoogle } from 'react-icons/fc';
import loginRegistrationImg from '../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/ContextProvider';


const Login = () => {

    const { logInUser } = useContext(AuthContext);

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user)

        // logIn user
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-2/4">
                    <img src={loginRegistrationImg} className="w-3/4" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogIn}>
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-sm font-medium text-[#444]'>Or Sign In with</p>
                    <div className='flex justify-center gap-3 my-5'>
                        <button className='text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                        <button className='text-[#0A66C2]'><FaLinkedinIn></FaLinkedinIn></button>
                        <button><FcGoogle></FcGoogle></button>
                    </div>
                    <p className='text-center'>Already Have an account? <Link to={"/registration"}><button className="btn btn-active btn-link ">Registration</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;