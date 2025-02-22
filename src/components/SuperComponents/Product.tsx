"use client"; 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

interface ProductProps {
    title: string;
    discountedPrice: string;
    image: string;
    id: string;
}
const Product: React.FC<ProductProps> = ({ title, discountedPrice, image, id }) => {
    console.log("Product", title, discountedPrice, image, id);
    return (
        <div>
            <div className="bg-gray-400 text-black  flex flex-col justify-between shadow-question">
                <div className="relative w-full h-[200px]">
                    <img src={image} alt={title} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="relative bg-white  p-4 w-5/6 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  -mt-[30px] z-34">
                <div className="text-black text-[10px]  ">Chimgee</div>
                <div className="text-[15px] text-black">{title}</div>
                <p className="text-gray-600 text-[12px] ">{discountedPrice}</p>
                <Link className="flex items-center text-[13px]" href={`/product/${id}`}>
                    <span className=" text-black">Илүү ихийг</span>
                    <Image src="/arrow.svg" alt="Arrow" width={20} height={20} />
                </Link>
            </div>
        </div>
    );
};

export default Product;
