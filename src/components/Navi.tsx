// components/Navi.tsx
import {Link} from "react-router-dom";
import {useState} from "react";

const Navi = () => {
    // Simulate user authentication state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to toggle login state for demonstration
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <nav className="navbar bg-gray-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/subscription">Subscription</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost normal-case text-xl">HairCutPro</Link>
            </div>
            <div className="navbar-end">
                {isLoggedIn ? (
                    <button onClick={toggleLogin} className="btn">Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="btn mr-2" onClick={toggleLogin}>Login</Link>
                        <Link to="/signup" className="btn">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navi;
