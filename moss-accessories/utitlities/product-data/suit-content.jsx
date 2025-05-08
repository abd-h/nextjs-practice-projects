"use client";
import Link from "next/link";

import { useState } from "react";

import { suits } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinks from "./product-navlinks";

export default function SuitsContent() {
  const [isclicked, setIsClicked] = useState(false);

  const handleToggle = () => setIsClicked(!isclicked);

 

  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-[80%]  justify-evenly`}
      >
        <ul className="space-y-3 mb-4 flex-col cursor-pointer">
          <h3 className="text-sm font-semibold mb-4 ">Style</h3>
          {suits.style.map((item) => (
            <li key={item.id}>
              <div className="group inline-block relative">
                <Link href={item.href} className="group relative">
                  {item.title}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Occoassins</h3>
          {suits.occassions.map((item) => (
            <li key={item.id}>
              <Link className="relative group" href={item.href}>
                {item.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Suits by color</h3>
          {suits.suits_by_colour.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="group relative">
                {item.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Jackets</h3>
          {suits.jackets.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="group relative">
                {item.title}

                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Services</h3>
          {suits.services.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="group relative">
                {item.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
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
