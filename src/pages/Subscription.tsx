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
                    {/* Using daisyUI's Card component for subscription plans */}
                    {/* Basic Plan */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Basic</h2>
                            <p>Get access to our basic tutorials.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Introduction to hairdressing</div>
                                <div className="badge badge-outline">Basic cutting techniques</div>
                                <div className="badge badge-outline">Styling fundamentals</div>
                            </div>
                            <button className="btn btn-primary btn-block mt-4">Subscribe for $9.99/month</button>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Premium</h2>
                            <p>Everything in Basic, plus:</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Advanced styling techniques</div>
                                <div className="badge badge-outline">Color theory and application</div>
                                <div className="badge badge-outline">Personalized feedback</div>
                            </div>
                            <button className="btn btn-secondary btn-block mt-4">Subscribe for $19.99/month</button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Pro</h2>
                            <p>All Premium features, plus:</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline p-5">One-on-one coaching sessions</div>
                                <div className="badge badge-outline">Access to exclusive webinars</div>
                                <div className="badge badge-outline">Early access to new tutorials</div>
                            </div>
                            <button className="btn btn-accent btn-block mt-4">Subscribe for $29.99/month</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
