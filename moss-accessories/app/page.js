import Footer from "@/components/footer/footer";
import MainHeader from "@/components/header/header";
import ProductLandingPage from "@/components/main/product_landing_page";
import { getAccessories } from "@/lib/products";
import Image from "next/image";

export default async function Home() {
  const products =  getAccessories();
  // console.log(products);
  
  return (
    <>
      <MainHeader />
      <main className="max-w-[98%] m-auto">
        <ProductLandingPage />
      </main>
      <Footer />
    </>
  );
}
