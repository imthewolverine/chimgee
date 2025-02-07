"use client";

import React, { useState, useEffect } from "react";
import Product from "@/components/SuperComponents/Product";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Search from "@/components/SuperComponents/Search";
import { getProducts } from "@/lib/data";

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        }
        fetchData();
    }, []);

    // 🔹 Filter products based on searchQuery
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="px-5">
                {/* 🔹 Pass setSearchQuery to update search input */}
                <Search onSearch={setSearchQuery} />
            </div>
            <div className="bg-gray-100 w-full p-6 sm:px-10 md:px-10 lg:px-40 xl:px-72">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            product.id && typeof product.id === "string" && (
                                <div key={product.id} className="ml-2 mt-20">
                                    <Product
                                        title={product.title}
                                        discountedPrice={product.discountedPrice}
                                        image={product.images?.[0]} // Use first image from array
                                        id={product.id}
                                    />
                                </div>
                            )
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full mt-10">Бүтээгдэхүүн олдсонгүй.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductList;
