"use client"; 
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductProps {
    title: string;
    description: string;
    image: string;
}

const Product: React.FC<ProductProps> = ({ title, description, image }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/Appointment'); 
    };

    return (
        <div className="bg-gray-400 text-black  flex flex-col justify-between ">
            <div className="relative w-full h-[200px]">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="bg-white mb-[-30px] p-4 w-5/6 dark:md:hover:bg-blue-200">
                <div className="text-black text-[10px]">Chimgee</div>
                <div className="text-[15px]">{title}</div>

                <p className="text-gray-600 text-[12px] ">{description}</p>
                <button className="flex items-center text-[13px]" onClick={handleNavigation}>
                    <span className="">Илүү ихийг</span>
                    <Image src="/arrow.svg" alt="Arrow" width={20} height={20} />
                </button>
            </div>
        </div>
    );
};

export default Product;
