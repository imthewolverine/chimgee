import React from 'react';
import Products from "@/components/SuperComponents/Product";

const ProductsHome: React.FC = () => {
    return (
        <div>
            <div className='bg-grey-200  w-full items-center '>
            <h1>Бүтээгдэхүүн танилцуулга</h1>
            <p>Болон заавар авах хэсэг!</p>
            <div className='flex  w-full  flex-wrap space-x-4  grid grid-cols-3 gap-4' >
            <div className='ml-2 p-4'><Products/></div>
            <div className='ml-2 p-4'><Products/></div>
            <div className='ml-2 p-4'><Products/></div>
            
            </div>
            <div className='flex  w-full  flex-wrap space-x-4 grid grid-cols-3 gap-4'>
            <div className='ml-2 p-4 '><Products/></div>
            <div className='ml-2 p-4'><Products/></div>
            <div className='ml-2 p-4'><Products/></div>
            </div>
        </div>
        </div>
    );
};

export default ProductsHome;