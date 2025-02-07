'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Product from '@/assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-gray-200 sticky top-0 right-0 left-0 z-50 shadow text-[16px] Poppins">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={Product}
              width={150}
              height={150}
              alt="Logo"
            />
            </Link>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link href="/" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Нүүр</Link>
                </li>
                <li>
                  <Link href="/products" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Бүтээгдэхүүн</Link>
                </li>
                <li>
                  <Link href="/aboutus" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Бидний тухай</Link>
                </li>
                <li>
                  <Link href="#contactus" className="block py-2 px-3 text-[#6D7280] text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0">Холбоо барих</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;