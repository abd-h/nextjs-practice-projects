"use client";
import Link from "next/link";

import { useState } from "react";

import { suits } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinks from "./product-navlinks";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";

export default function SuitsContent() {
  const [isclicked, setIsClicked] = useState(false);

  const handleToggle = () => setIsClicked(!isclicked);

  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-[80%]  justify-evenly`}
      >
        <ProductNavLinksLargeScreens items={suits.style} title="Style" />
        <ProductNavLinksLargeScreens
          items={suits.occassions}
          title="Occasions"
        />
        <ProductNavLinksLargeScreens
          items={suits.suits_by_colour}
          title="Suits by color"
        />
        <ProductNavLinksLargeScreens items={suits.jackets} title="Jackets" />
        <ProductNavLinksLargeScreens items={suits.services} title="Services" />
      </div>

      {/* For smaller screens */}
      <div
        className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly scroll-m-1  `}
      >
        <ProductNavLinks title="Style" items={suits.style} />
        <ProductNavLinks title="Occasions" items={suits.occassions} />
        <ProductNavLinks title="Suits by color" items={suits.suits_by_colour} />
        <ProductNavLinks title="Jackets" items={suits.jackets} />
        <ProductNavLinks title="Services" items={suits.services} />
      </div>
    </>
  );
}
