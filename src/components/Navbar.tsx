'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Product from '@/assets/product.png';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-gray-200 sticky top-0 right-0 left-0 z-50 shadow text-[16px] Poppins">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={Product}
              width={80}
              height={80}
              alt="Logo"
            />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Chimgee</span>
            </Link>
            <Link href="/home" className="hidden sm:block md:hidden border border-blue-600 border-2 hover:bg-blue-600 hover:text-white font-medium text-blue-600 py-3 px-5 rounded">Нэвтрэх</Link>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a href="#" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Нүүр</a>
                </li>
                <li>
                  <a href="#Activity" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Бүтээгдэхүүн</a>
                </li>
                <li>
                  <a href="#AboutUs" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Бидний тухай</a>
                </li>
                <li>
                  <a href="#ContactUs" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Холбоо барих</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;