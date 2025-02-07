import React from 'react';
import Products from "@/components/SuperComponents/Product";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Search from '@/components/SuperComponents/Search';

const testData = [
    { id: 1, title: "Product 1", description: "Description for Product 1", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi95ivGXov-Hv6bav-UUA5Ny2kIxreIpVEmFZAwJpwlYdiifPg7HqoExP0xuOYkW8YH4fC4oHeAzAu9svoxM_BtSjlTKzDyQzrGZuwsT5WhXQspOB2rf825dR-Co2ttl5r2IiF1WtKh7Js/s640/Picture1.png" },
    { id: 2, title: "Product 2", description: "Description for Product 2", image: "https://peak.mn/files/b6c078e0-42ed-4638-b631-a1b1bde0f95f/aaf4f89248b26704f5ce1c50f19f2324.jpg" },
    { id: 3, title: "Product 3", description: "Description for Product 3", image: "https://peak.mn/files/f551c63b-8ded-4a81-bca0-d40f0f3e032c/e8970e704c33008855b2b1a34ff66b02.jpg" },
    { id: 4, title: "Product 4", description: "Description for Product 4", image: "https://peak.mn/files/b6c078e0-42ed-4638-b631-a1b1bde0f95f/a7aca4cdefe1208a3f88a9f882e7bec5.jpg" },
    { id: 5, title: "Product 5", description: "Description for Product 5", image: "https://urgamal.com/wp-content/uploads/2008/09/%D0%9C%D0%BE%D1%80%D0%B4%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%BD%D1%8B%D0%B9.jpg" },
    { id: 6, title: "Product 6", description: "Description for Product 6", image: "https://urgamal.com/wp-content/uploads/2025/01/%D0%B3%D0%B0%D0%BD%D0%B4%D0%B8%D0%B3%D0%B0%D1%80-1.jpg" },
];

const ProductList: React.FC = () => {
    return (
        <div className='bg-gray-100'>
            
            <div><Navbar/></div>
            <div className='px-5'><Search/></div>
        <div className='bg-gray-100 w-full p-6 sm:px-10 md:px-10 lg:px-40 xl:px-72  '>
            {/* 🔹 Featured Product Card (Top One) */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {testData.slice().map(product => (
                    <div key={product.id} className='ml-2 mt-20 '>
                        <Products title={product.title} description={product.description} image={product.image} />
                    </div>
                ))}
            </div>
            
        </div>
        <div><Footer/></div>
        </div>
    );
};

export default ProductList;