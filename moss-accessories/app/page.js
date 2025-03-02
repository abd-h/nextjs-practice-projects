import MainHeader from "@/components/header/header";
import { getAccessories } from "@/lib/products";
import Image from "next/image";

export default async function Home() {
  const products =  getAccessories();
  console.log(products);
  
  return (
    <>
     <MainHeader />
      <main>
      Main part goes hear!
      </main>
    </>
  );
}
