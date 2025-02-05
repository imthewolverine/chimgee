import React from 'react';
import Products from "@/components/SuperComponents/Product";

const testData = [
    { id: 1, title: "Product 1", description: "Description for Product 1", image: "/images/product1.jpg" },
    { id: 2, title: "Product 2", description: "Description for Product 2", image: "/images/product2.jpg" },
    { id: 3, title: "Product 3", description: "Description for Product 3", image: "/images/product3.jpg" },
    { id: 4, title: "Product 4", description: "Description for Product 4", image: "/images/product4.jpg" },
    { id: 5, title: "Product 5", description: "Description for Product 5", image: "/images/product5.jpg" },
    { id: 6, title: "Product 6", description: "Description for Product 6", image: "/images/product6.jpg" },
];

const ProductsHome: React.FC = () => {
    return (
        <div className='bg-gray-100 w-full p-6 sm:px-10 md:px-10 xl:px-72 '>
            <h1 className='text-5xl font-bold'>Бүтээгдэхүүн танилцуулга</h1>
            <p className='text-gray-600'>Болон заавар авах хэсэг!</p>

            {/* 🔹 Featured Product Card (Top One) */}
            <div className='mt-4 w-full mb-8 bg-white shadow-lg rounded-lg   '>
                <Products title={testData[0].title} description={testData[0].description} image={testData[0].image} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {testData.slice().map(product => (
                    <div key={product.id} className='ml-2 bg-white shadow rounded-lg mt-20 '>
                        <Products title={product.title} description={product.description} image={product.image} />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProductsHome;
