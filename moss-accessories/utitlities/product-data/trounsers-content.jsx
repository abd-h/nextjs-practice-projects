import Link from "next/link";
import { trousers } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinks from "./product-navlinks";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";
import { navbarImagesBanner } from "@/lib/navbar_image_banner";
import casualTrousersBanner from '@/assets/images/hero-banner-images/casual_trousers.png';

import smartTrousersBanner from '@/assets/images/hero-banner-images/smart_trousers.png';
import NavbarImageBanner from "@/components/navbar-system/navbar-image-banner";

export default function TrousersContent() {

  const navbarImageBanner = [
    navbarImagesBanner(casualTrousersBanner, "Casual trouser", "casual-trouser"),
    navbarImagesBanner(smartTrousersBanner, "Smart trousers", "smart-trouser"),
  ];
  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden flex justify-evenly w-full m-auto`}
      >
        <div className=" flex items-stretch justify-around w-1/2 py-6">
          <ProductNavLinksLargeScreens
            items={trousers.trousers}
            title="Trousers"
          />
          <ProductNavLinksLargeScreens
            items={trousers.trousers_by_colour}
            title="Trousers by colour"
          />
          <ProductNavLinksLargeScreens items={trousers.shorts} title="Shorts" />
        </div>
        <NavbarImageBanner imageBanner={navbarImageBanner}/>

      </div>

      {/* For smaller screens */}
      <div
        className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly scroll-m-1  `}
      >
        <ProductNavLinks items={trousers.trousers} title="Trouser" />
        <ProductNavLinks
          items={trousers.trousers_by_colour}
          title="Trouser by colour"
        />
        <ProductNavLinks items={trousers.shorts} title="Shorts" />
      </div>
    </>
  );
}
