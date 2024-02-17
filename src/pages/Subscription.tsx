// pages/Subscription.tsx
const Subscription = () => {
    return (
        <div className="bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h1>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Unlock full access to our comprehensive library of hairdressing tutorials.
                </p>

                {/* Plans Container */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Basic Plan */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="font-bold text-xl mb-4">Basic</h2>
                        <p className="text-gray-600 mb-4">Get access to our basic tutorials.</p>
                        <ul className="text-gray-600 mb-6">
                            <li>- Introduction to hairdressing</li>
                            <li>- Basic cutting techniques</li>
                            <li>- Styling fundamentals</li>
                        </ul>
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Subscribe for $9.99/month
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="font-bold text-xl mb-4">Premium</h2>
                        <p className="text-gray-600 mb-4">Everything in Basic, plus:</p>
                        <ul className="text-gray-600 mb-6">
                            <li>- Advanced styling techniques</li>
                            <li>- Color theory and application</li>
                            <li>- Personalized feedback</li>
                        </ul>
                        <button
                            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6">
                            Subscribe for $19.99/month
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="font-bold text-xl mb-4">Pro</h2>
                        <p className="text-gray-600 mb-4">All Premium features, plus:</p>
                        <ul className="text-gray-600 mb-6">
                            <li>- One-on-one coaching sessions</li>
                            <li>- Access to exclusive webinars</li>
                            <li>- Early access to new tutorials</li>
                        </ul>
                        <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Subscribe for $29.99/month
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
