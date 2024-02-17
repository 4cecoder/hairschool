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
                    {/* Adjusted grid layout for medium screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {/* daisyUI Card component for each tutorial */}
                        <div className="card card-compact w-full bg-base-100 shadow-xl">
                            <figure><img src="https://via.placeholder.com/300x200" alt="Featured Tutorial"/></figure>
                            <div className="card-body">
                                <h3 className="card-title">Basic Cuts</h3>
                                <p>Start your journey with the basics of hair cutting.</p>
                            </div>
                        </div>
                        <div className="card card-compact w-full bg-base-100 shadow-xl">
                            <figure><img src="https://via.placeholder.com/300x200" alt="Featured Tutorial"/></figure>
                            <div className="card-body">
                                <h3 className="card-title">Styling Techniques</h3>
                                <p>Explore creative styling techniques to elevate your skills.</p>
                            </div>
                        </div>
                        <div className="card card-compact w-full bg-base-100 shadow-xl">
                            <figure><img src="https://via.placeholder.com/300x200" alt="Featured Tutorial"/></figure>
                            <div className="card-body">
                                <h3 className="card-title">Advanced Coloring</h3>
                                <p>Master the art of hair coloring with advanced tutorials.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Join Our Community</h2>
                    <p className="text-gray-600 mt-2">
                        Sign up to access premium content, join live sessions, and more.
                    </p>
                    <button className="btn btn-primary mt-4">
                        Get Started
                    </button>
                </section>
            </main>
        </div>
    );
};

export default Home;
