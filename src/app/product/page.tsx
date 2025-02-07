import Navbar from "@/components/Navbar";
import ProductDescription from "@/components/ProductDesctription";
import ProductInformation from "@/components/ProductInformation";

export default function ProductsPage() {
    return (
        <div className=" items-center bg-gray-200">
            <Navbar/>
            <ProductDescription />
            <ProductInformation />
        </div>
    );
}