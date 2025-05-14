import Link from "next/link";
import ProductNavLinks from "./product-navlinks";


import { custom_made } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";

import customMadeTux from "@/assets/images/hero-banner-images/custom-made-tux.png";

import customeMadeSuit from "@/assets/images/hero-banner-images/custom-made-suit.webp";
import NavbarImageBanner from "@/components/navbar-system/navbar-image-banner";

// This component is used to display the custom made content on the page
// It uses the ProductNavLinks component to display the links for custom made and design it now
// It also uses the ProductNavLinksLargeScreens component to display the links for larger screens
// It uses the custom_made data from the navbar-sublinks-data file to get the links for custom made and design it now
// It uses the customMadeTux from the assets folder to display the image for custom made and design it now
// It uses the Image component from next/image to display the image
// It uses the Link component from next/link to create links for custom made and design it now
// It uses the custom_made data from the navbar-sublinks-data file to get the links for custom made and design it now
// It uses the customMadeTux from the assets folder to display the image for custom made and design it now
export default function CustomMadeContent() {

  const navbarImageBanner = [
    {id: 'shoes-banner', image:customMadeTux, figcaption: "Custom made shoes"},
    {id: 'ties-banner',  image: customeMadeSuit, figcaption: "Custom made ties"},
  ]
  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-[100%]  h-full justify-evenly  `}
      >
        <div className=" flex items-center justify-around w-1/2 ">
          {" "}
          <ProductNavLinksLargeScreens
            title="Custom made"
            items={custom_made.custom_made}
          />
          <ProductNavLinksLargeScreens
            title="Design it now"
            items={custom_made.design_it_now}
          />
        </div>
      
          <NavbarImageBanner imageBanner={ navbarImageBanner} />
         
        </div>
      

      {/* For smaller screens */}
      <div
        className={`larger_screens:hidden flex  flex-col mx-auto w-1/2  justify-evenly scroll-m-1`}
      >
        <ProductNavLinks title="Custom made" items={custom_made.custom_made} />
        <ProductNavLinks
          title="Design it now"
          items={custom_made.design_it_now}
        />
      </div>
    </>
  );
}
