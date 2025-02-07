import React from 'react';
import Product from "@/components/SuperComponents/Product";
import Link from 'next/link'
import { getProducts } from '@/lib/data';
const ProductsHome: React.FC = async () => {
    const products = await getProducts();
    console.log("products ", products);

    return (
        <div className='bg-gray-100 w-full p-6 sm:px-10 md:px-10 lg:px-40 xl:px-72  '>
                <div className='sm:text-1xl md:text-5xl text-gray-800 font-bold flex items-center justify-center my-10'>
                    <Link href="/products"> Манай бүтээгдэхүүн </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-blue-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </div>
                    {/* 🔹 Featured Product Card (Top One) 
                <div className='mt-4 w-full mb-8 '>
                    <Product title={products[0].title} discountedPrice={products[0].discountedPrice} image={products[0].images[0]} id={products[0].id} />
                </div>*/}
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
    );
};

export default ProductsHome;
