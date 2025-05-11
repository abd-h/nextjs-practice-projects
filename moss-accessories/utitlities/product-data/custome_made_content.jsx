import Link from "next/link";
import ProductNavLinks from "./product-navlinks";


import { custom_made } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";
import Image from "next/image";

import shoesHeroBannerImage from "@/assets/images/shoes/navbar_hero_banner.webp";
export default function CustomMadeContent() {
  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-[100%]  justify-evenly bg-[#857777ce]`}
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
        <div
          className={` w-1/2  flex items-start bg-[#857777ce] !important `}
          style={{ backgroundColor: "#857777ce" }}
        >
          <div className="w-full flex items-center justify-around gap-4">
            <Image
              src={shoesHeroBannerImage}
              alt="testImage"
              width="200"
              height="200"
            />
            <Image
              src={shoesHeroBannerImage}
              alt="testImage"
              width="200"
              height="200"
            />
          </div>
        </div>
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
