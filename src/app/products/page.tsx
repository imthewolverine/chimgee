import React from 'react';
import Product from "@/components/SuperComponents/Product";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Search from '@/components/SuperComponents/Search';
import { getProducts } from '@/lib/data';

const ProductList: React.FC = async () => {
    const products = await getProducts();
    return (
        <div className='bg-gray-100'>
            
            <div><Navbar/></div>
            <div className='px-5'><Search/></div>
        <div className='bg-gray-100 w-full p-6 sm:px-10 md:px-10 lg:px-40 xl:px-72  '>
            {/* 🔹 Featured Product Card (Top One) */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {products.slice().map((product: { id: React.Key | null | undefined; title: string; discountedPrice: string; images: string; }) => (
                        product.id && typeof product.id === 'string' && (
                            <div key={product.id} className='ml-2  mt-20 '>
                                <Product title={product.title} discountedPrice={product.discountedPrice} image={product.images[0]} id={product.id}/>
                            </div>
                        )
                    ))}
                </div>
            
        </div>
        <div><Footer/></div>
        </div>
    );
};

export default ProductList;