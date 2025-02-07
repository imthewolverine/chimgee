import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDescription from "@/components/ProductDesctription";
import ProductInformation from "@/components/ProductInformation";
import { notFound } from "next/navigation";
import React from "react";
import { getProducts } from "@/lib/data";

export default async function ProductsPage({ params }: { params: { id: string } }) {
  const products = await getProducts();
  console.log("products ", products);
  const { id } = await params;
  console.log("params", id);

  const product = products.find((p: { id: string }) => p.id === id);
  console.log("product", product);
  
  if (!product) return notFound();

  return (
    <div className="items-center bg-gray-200">
      <Navbar />
      <ProductDescription product={product}/>
      <ProductInformation product={product}/>
      <Footer />
    </div>
  );
}
