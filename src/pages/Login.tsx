// pages/Login.tsx
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <label className="input-group">
                            <span><FontAwesomeIcon icon={faUser}/></span>
                            <input type="text" placeholder="username" className="input input-bordered w-full"/>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group">
                            <span><FontAwesomeIcon icon={faLock}/></span>
                            <input type="password" placeholder="password" className="input input-bordered w-full"/>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
