import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleClick = event => {
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            createUser(email,password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error =>console.error(error))
        }
    return (
        <div className="hero mt-5 mb-5">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left mr-5">
                <h1 className="text-5xl font-bold">Sign Up Now</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleClick} className="card-body">
                    <h1 className='text-center text-3xl font-bold'>Sign up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered"/>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Sign Up" className="btn btn-primary" />
                    </div>
                </form>
                <p className='text-center mb-7'>Have an account? <Link to='/login'>Login</Link></p>
            </div>

        </div>
    </div>
    );
};

export default Register;