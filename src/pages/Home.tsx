const Home = () => {
    return (
        <div className="bg-gray-50">
            <header className="bg-gray-800 text-white text-center p-6">
                <h1 className="text-4xl font-bold">Your Platform Name</h1>
                <p className="text-xl mt-2">Your platform description</p>
            </header>
            <main className="p-4 md:p-8">
                <section className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Live Streaming</h2>
                    <p className="text-gray-600 mt-2">
                        Broadcast your live streams on multiple platforms. Pay per view or subscription-based live
                        streaming.
                    </p>
                </section>
                <section className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Video on Demand</h2>
                    <p className="text-gray-600 mt-2">
                        Access our extensive library of videos on demand. Pay per view or subscription-based access.
                    </p>
                </section>
                <section className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Online Meetings/Webinars</h2>
                    <p className="text-gray-600 mt-2">
                        Host online meetings or webinars with ease.
                    </p>
                </section>
                <section className="my-8">
                    <h2 className="text-3xl font-bold text-gray-800">Social Media Integration</h2>
                    <p className="text-gray-600 mt-2">
                        Integrate with various social media platforms for announcements and bookings.
                    </p>
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