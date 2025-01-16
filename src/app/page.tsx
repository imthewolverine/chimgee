import Appointment from "@/components/Appointment";
import Navbar from "@/components/Navbar";
import ProductsHome from "@/components/ProductsHome";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div><Appointment/> </div>
      <div><ProductsHome/></div>
    </div>
  );
}
