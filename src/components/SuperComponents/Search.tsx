'use client';

import React from 'react';
interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    return (
        <div className="max-w-md mx-auto mt-10 mb-  0">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Хайх</label>
            <div className="relative">
                
                <input type="search" id="default-search" className="block w-full p-4 text-md text-gray-800 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 " placeholder="Хайх..." onChange={(e) => onSearch(e.target.value)} required />
                {/*<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Хайх</button>*/}
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 pr-6 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Search;