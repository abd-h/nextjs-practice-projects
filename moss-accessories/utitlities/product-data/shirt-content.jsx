import Link from "next/link";
import { shirts } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinks from "./product-navlinks";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";
import NavbarImageBanner from "@/components/navbar-system/navbar-image-banner";
import { navbarImagesBanner } from "@/lib/navbar_image_banner";

import linenShirtsBanner from "@/assets/images/hero-banner-images/linen_shirts.png";

export default function ShirtsContent() {
  const navbarImageBanner = [
    navbarImagesBanner(
      linenShirtsBanner,
      "Linen shirts",
      "linen-shirts"
    ),
  ];

  console.log(navbarImageBanner.length);
  
  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-full  justify-between scroll-m-1  `}
      >
        <div className=" flex items-stretch justify-around w-[70%] py-6">
      <ProductNavLinksLargeScreens title='Formal' items={shirts.formal} />
      <ProductNavLinksLargeScreens title='Casual shirts' items={shirts.casual} />
      <ProductNavLinksLargeScreens title='Shirts by colour' items={shirts.shirts_by_colour} />
      <ProductNavLinksLargeScreens title='Fit' items={shirts.fit} /> 
      </div>
        <NavbarImageBanner imageBanner={ navbarImageBanner } />
      </div>

      {/* For smaller screens */}
      <div
        className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly scroll-m-1  `}
      >
        <ProductNavLinks title="Formal" items={shirts.formal} />
        <ProductNavLinks title="Casual shirts" items={shirts.casual} />
        <ProductNavLinks
          title="Shirts by colour"
          items={shirts.shirts_by_colour}
        />
        <ProductNavLinks title="Fit" items={shirts.fit} />
      </div>
    </>
  );
}
