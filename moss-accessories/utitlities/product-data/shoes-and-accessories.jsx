import Link from "next/link";

import ProductNavLinks from "./product-navlinks";

import { shoes_and_accessories } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";

export default function ShoesAndAccessoriesContent() {
  return (
    <>
      {/* For larger screens */}
      {/* This is for larger screens only */}
      {/* It takes in items and title as props */}
      {/* items is an array of objects containing id, title and href */}
      {/* title is a string */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-[80%]  justify-evenly`}
      >
        <ProductNavLinksLargeScreens
          items={shoes_and_accessories.shoes}
          title="Shoes"
        />
        <ProductNavLinksLargeScreens
          items={shoes_and_accessories.accessories}
          title="Accessories"
        />
      </div>
      {/* For smaller screens */}
      {/* This is for smaller screens only */}
      {/* It takes in items and title as props */}
      {/* items is an array of objects containing id, title and href */}
      {/* title is a string */}
      <div
        className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly scroll-m-1  `}
      >
        <ProductNavLinks title="Shoes" items={shoes_and_accessories.shoes} />
        <ProductNavLinks
          title="Accessories"
          items={shoes_and_accessories.accessories}
        />
      </div>
    </>
  );
}
