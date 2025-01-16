import React from 'react';
import Image from 'next/image'; 

const Product: React.FC = () => {
    return (
        <div className="bg-gray-600 text-black mb-4 flex flex-col justify-between text-black">
            <div className="relative w-full h-[200px] ">
            </div>
            <div className="bg-white  p-2 mb-[-50px] p-4"> 
            <div className="text-black text-[10px]  ">Chimgee</div>
            <div className='m-1 text-[20px]'>Элэг эмчлэх бүтээгдэхүүн</div>
            <div className="text-gray-500 text-[12px] ">
                {new Date().toLocaleString()}
            </div>  
            <div className='flex items-center'>
            <div className="m-2 text-[13px] ">Илүү ихийг</div> 
            <div><Image src="/arrow.svg" alt="Arrow" width={20} height={20} /></div>
            </div>
            </div>
        </div>
    );
};

export default Product;