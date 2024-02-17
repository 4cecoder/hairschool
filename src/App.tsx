import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';
import './App.css';
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar with daisyUI */}
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
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"/>
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-grow container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/categories" element={<Categories/>}/>
                        <Route path="/subscription" element={<Subscription/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </main>

                {/* Footer */}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
