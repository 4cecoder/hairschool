// pages/Signup.tsx
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails); // Here you would typically send the data to your backend
        alert('Signup successful!'); // Placeholder for success feedback
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <span><FontAwesomeIcon icon={faUser}/></span>
                                <input type="text" name="name" placeholder="Your Name"
                                       className="input input-bordered w-full" value={userDetails.name}
                                       onChange={handleChange} required/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <span><FontAwesomeIcon icon={faEnvelope}/></span>
                                <input type="email" name="email" placeholder="you@example.com"
                                       className="input input-bordered w-full" value={userDetails.email}
                                       onChange={handleChange} required/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input-group">
                                <span><FontAwesomeIcon icon={faLock}/></span>
                                <input type="password" name="password" placeholder="password"
                                       className="input input-bordered w-full" value={userDetails.password}
                                       onChange={handleChange} required/>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
