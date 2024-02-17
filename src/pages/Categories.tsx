// pages/Categories.tsx
const Categories = () => {
    // Example categories data
    const categories = [
        {
            name: 'Basic Cuts',
            description: 'Learn the fundamentals of hair cutting.',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Styling',
            description: 'Explore various hair styling techniques.',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Coloring',
            description: 'Master the art of hair coloring and highlights.',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Men’s Hair',
            description: 'Specialized techniques for men’s haircuts and styling.',
            image: 'https://via.placeholder.com/150'
        },
        // Add more categories as needed
    ];

    return (
        <div className="py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div key={category.name}
                             className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
                            <img src={category.image} alt={category.name}
                                 className="w-32 h-32 object-cover rounded-full mb-4"/>
                            <h2 className="font-bold text-lg">{category.name}</h2>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
