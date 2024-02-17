import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';
import './App.css';
import Footer from "./components/Footer.tsx";
import Navi from "./components/Navi.tsx";
import Login from "./pages/Login.tsx";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <Navi/>

                {/* Main Content */}
                <main className="flex-grow container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/categories" element={<Categories/>}/>
                        <Route path="/subscription" element={<Subscription/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<h1>Not Found</h1>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </main>

                {/* Footer */}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
