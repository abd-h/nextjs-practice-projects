"use client";

import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

// This client component is used to render the editorial carousel in the footer of the website.

import doubleBreastedSuit from "@/public/images/double-breasted-spotlight.webp";
import weddingSuit from "@/public/images/summer-wedding.webp";
import workingDetail from "@/public/images/working-detail.webp";

const items = [
  {
    id: "doubleBreastedSuit",
    title: "Spotlight on: double breasted suit",
    image: doubleBreastedSuit,
    alt: "Double Breasted Suit",
  },
  {
    id: "weddingSuit",
    title: "What to wear to a summer wedding",
    image: weddingSuit,
    alt: "Wedding Suit",
  },
  {
    id: "workingDetail",
    title: "Functional cuffs: working detail",
    image: workingDetail,
    alt: "Working Detail",
  },
];
export default function FooterEditorialCarousel() {
  const [activeIndex, setActiveIndex] = useState(items[0].image ? 0 : null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
    setActiveIndex(index); // Set active index to the hovered item, this keeps the image visible as the new default active item;
  }

  const handleMouseLeave = () => {
    setHoverIndex(null);
  }
console.log('hoverIndex', hoverIndex);
  console.log('activeIndex', activeIndex);
  // This component displays a carousel of editorial items in the footer.

  return (
    <section className="w-full flex h-full">
      <section className="outline w-1/2 p-16">
        <h2 className="uppercase font-extrabold text-sm">on form since 1851</h2>{" "}
        <p className="py-4 text-lg font-light tracking-wide h-2">
          For big days and everydays, for life’s milestones and more minor
          moments – it all matters, and it’s all worthy of a great outfit. With
          over 170 years around the (tailoring) block and a collection of modern
          suiting, elevated daily wear and carefully curated accessories, Moss
          is the menswear destination for dressed-up moments and refined
          everyday wardrobes.
        </p>
      </section>

      <section className=" outline w-1/2 flex  justify-center ">
        {/** Desktop */}
        <article className=" flex flex-col p-16 space-y-12 ">
          <h2 className="text-2xl font-thin uppercase tracking-widest">
            Editorial
          </h2>
          {items.map((item, index) => (
            <div
              key={item.id}
              role="button"
              tabIndex="0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`relative group cursor-pointer outline-none border-b-2 border-[#636363] pb-4
                  ${activeIndex === index ? "text-white" : "text-gray-400 "}`}
            >
              <span className={`py-4 w-full text-2xl `}>{item.title}</span>
              <span className="absolute left-full top-1/2 -translate-y-1/2 pl-4">
                <svg
                  className={`w-6 h-6 transform transition-all duration-300 ease-in-out
                ${
                  activeIndex === index
                    ? "opacity-100 translate-x-2"
                    : "opacity-0 -translate-x-2"
                }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          ))}
        </article>
        <aside className="1/2 flex items-center justify-center">
          {activeIndex !== null && (
            <Image
              src={items[activeIndex].image}
              alt={items[activeIndex].alt}
              className="h-full w-auto object-cover rounded transition-opacity duration-500"
            />
          )}
        </aside>
        {/** Mobile */}
      </section>
    </section>
  );
}
