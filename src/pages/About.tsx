const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-bold text-primary mb-6">About HairCutPro</h1>
            <p className="mb-6 text-lg max-w-2xl mx-auto text-gray-600">
                HairCutPro is the premier online destination for learning the art of hairdressing from the comfort of
                your home. Our platform offers a wide range of tutorials covering basic to advanced hairdressing
                techniques, designed by professionals for both beginners and experienced stylists.
            </p>

            {/* Adjusted Team Section for Better Text Space */}
            <div className="w-full max-w-6xl mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            name: "Alex Doe - Founder",
                            bio: "With over 20 years in the industry, Alex brings a wealth of knowledge and passion to HairCutPro.",
                            img: "https://via.placeholder.com/150"
                        },
                        {
                            name: "Jamie Smith - Co-Founder",
                            bio: "Jamie, a master stylist and educator, is dedicated to making professional education accessible to all.",
                            img: "https://via.placeholder.com/150"
                        },
                        // Template for more team members
                    ].map((member, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex flex-col md:flex-row">
                                    <figure className="md:pr-4">
                                        <img src={member.img} alt={member.name}
                                             className="rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 mb-4 md:mb-0"/>
                                    </figure>
                                    <div>
                                        <h2 className="card-title text-xl font-bold">{member.name}</h2>
                                        <p className="text-md">{member.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl mt-12 max-w-4xl mx-auto">
                <div className="card-body">
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-lg">
                        Our mission is to empower individuals with the skills and knowledge to explore their creativity,
                        transform their careers, and elevate the hairdressing industry. We believe in fostering a
                        community where anyone can learn, share, and grow together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
