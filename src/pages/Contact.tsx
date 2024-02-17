// pages/Contact.tsx
const Contact = () => {
    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            {/* Using daisyUI's Card component for the form container */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <form>
                        <div className="form-control">
                            <label className="label" htmlFor="name">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="message">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                placeholder="Your message here..."
                                className="textarea textarea-bordered h-24"
                            ></textarea>
                        </div>
                        {/* Using daisyUI's Button component */}
                        <div className="form-control mt-6">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
