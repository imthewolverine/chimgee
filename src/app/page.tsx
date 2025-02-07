import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsHome from "@/components/ProductsHome";

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <div><Navbar/></div>
      <div><Appointment/> </div>
      <div><ProductsHome/></div>
      <div><Footer/></div>
    </div>
  );
}
