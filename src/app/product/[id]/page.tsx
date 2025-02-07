import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDescription from "@/components/ProductDesctription";
import ProductInformation from "@/components/ProductInformation";
import { notFound } from "next/navigation";
import React from "react";
import { getProducts } from "@/lib/data";

// Correct the interface to match Next.js App Router params
interface ProductsPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const products = await getProducts();
  const { id } = await params;

  const product = products.find((p: { id: string }) => p.id === id);
  
  if (!product) return notFound();

  return (
    <div className="items-center bg-gray-200">
      <Navbar />
      <ProductDescription product={product} />
      <ProductInformation product={product} />
      <Footer />
    </div>
  );
}