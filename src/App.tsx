import './App.css';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-lg font-bold">HairCutPro</a>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">Categories</a>
                        <a href="#" className="hover:text-gray-300">Subscription</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Premium Hair Cutting Videos</h1>
                {/* Placeholder for video content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Example Video Placeholder */}
                    <div className="bg-gray-200 aspect-video"></div>
                    <div className="bg-gray-200 aspect-video"></div>
                    <div className="bg-gray-200 aspect-video"></div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-700 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 HairCutPro. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
