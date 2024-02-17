import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <nav className="bg-gray-800 text-white p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link to="/" className="text-lg font-bold">HairCutPro</Link>
                        <div className="space-x-4">
                            <Link to="/">Home</Link>
                            <Link to="/categories">Categories</Link>
                            <Link to="/subscription">Subscription</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
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
                <footer className="bg-gray-700 text-white p-4">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 HairCutPro. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
