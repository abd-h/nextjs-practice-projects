import Link from "next/link";

import ProductNavLinks from "./product-navlinks";

import { shoes_and_accessories } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";
import NavbarImageBanner from "@/components/navbar-system/navbar-image-banner";

import shoesHeroBanner from "@/assets/images/hero-banner-images/shoes_navbar_hero_banner.webp";

import tiesHeroBanner from "@/assets/images/hero-banner-images/ties_navlink_banner.png";
import  {imgBanner, navbarImagesBanner}  from "@/lib/navbar_image_banner";  

export default function ShoesAndAccessoriesContent() {
  // This component is used to display the shoes and accessories content on the page
  // It uses the ProductNavLinks component to display the links for shoes and accessories

  const navbarImageBanner = [
    navbarImagesBanner(shoesHeroBanner, "Custom made shoes", "shoes-banner"),
    navbarImagesBanner(tiesHeroBanner, "Custom made ties", "ties-banner"),
  ];
  
  console.log('fig caption'.replace(/\s/g, "-"));
  

  

  return (
    <>
      {/* For larger screens */}
      {/* This is for larger screens only */}
      {/* It takes in items and title as props */}
      {/* items is an array of objects containing id, title and href */}
      {/* title is a string */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-full  justify-evenly`}
      >
        <div className=" flex items-stretch justify-around w-1/2 py-6">
          <ProductNavLinksLargeScreens
            items={shoes_and_accessories.shoes}
            title="Shoes"
          />
          <ProductNavLinksLargeScreens
            items={shoes_and_accessories.accessories}
            title="Accessories"
          />
        </div>
        <NavbarImageBanner imageBanner={navbarImageBanner} />
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
