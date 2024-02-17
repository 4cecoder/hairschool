// pages/Home.tsx
const Home = () => {
    return (
        <div className="bg-gray-50">
            <header className="bg-gray-800 text-white text-center p-6">
                <h1 className="text-4xl font-bold">HairCutPro</h1>
                <p className="text-xl mt-2">Premium Hairdressing Videos</p>
            </header>
            <main className="p-4 md:p-8">
                <section className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Learn From the Best</h2>
                    <p className="text-gray-600 mt-2">
                        Dive into our extensive library of hairdressing tutorials. From basic cuts to advanced styling,
                        learn at your own pace, anytime, anywhere.
                    </p>
                </section>
                <section className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Featured Tutorials</h2>
                    {/* Placeholder for featured video content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <img src="https://via.placeholder.com/300x200" alt="Featured Tutorial"
                             className="rounded-lg shadow-lg"/>
                        <img src="https://via.placeholder.com/300x200" alt="Featured Tutorial"
                             className="rounded-lg shadow-lg"/>
                        <img src="https://via.placeholder.com/300x200" alt="Featured Tutorial"
                             className="rounded-lg shadow-lg"/>
                    </div>
                </section>
                <section className="my-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Join Our Community</h2>
                    <p className="text-gray-600 mt-2">
                        Sign up to access premium content, join live sessions, and more.
                    </p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </button>
                </section>
            </main>
        </div>
    );
};

export default Home;
