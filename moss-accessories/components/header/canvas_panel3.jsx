"use client";

import { useState, useEffect } from "react";

import {
  CustomMadeContent,
  ShirtsContent,
  ShoesAndAccessoriesContent,
  SuitsContent,
  TrousersContent,
  WeddingsContent,
} from "@/utitlities/navlink-content/product-content";

export default function NavbarSystem() {
  const [activeContent, setActiveContent] = useState(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
console.log(isMounted);

  const navItems = [
    { id: "suits", title: "Suits", content: SuitsContent() },
    { id: "weddings", title: "Weddings", content: WeddingsContent() },
    { id: "shirts", title: "Shirts", content: ShirtsContent() },
    { id: "trousers", title: "Trousers", content: TrousersContent() },
    {
      id: "shoes_and_accessories",
      title: "Shoes & accessories",
      content: ShoesAndAccessoriesContent(),
    },
    { id: "custom_made", title: "Custom Made", content: CustomMadeContent() },
  ];

  // Handle panel visibility with delay
  useEffect(() => {
    if (activeContent && isMounted) {
      setIsPanelVisible(true);
    } else {
      const timer = setTimeout(() => setIsPanelVisible(false), 300);

      return () => clearTimeout(timer);
    }
  }, [activeContent, isMounted]);

  return (
    <div
      className="relative"
      onMouseLeave={() => {
        setActiveContent(null);
        setIsMounted(false);
      }}
    >
      <nav className="flex items-center gap-24 relative">
        {navItems.map((item) => (
          <ul
            key={item.id}
            onMouseEnter={() => {
              setActiveContent(item.id);
              setIsMounted(true);
            }}
            // className="relative"
          >
            <li className="text-grey-600 hover:text-blue-600 transition-colors p-2 text-sm">
              {item.title}{" "}
            </li>
          </ul>
        ))}
      </nav>
      {/* Canvas Panel */}
      <div
        className={`fixed left-0 w-full  bg-white shadow-2xl  transition-opacity duration-0 ${
          isPanelVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }  `}
        onMouseEnter={() => setActiveContent(activeContent)}
      >
        {navItems.map((item) => (
          <div
           
            key={item.id}
            className={`transition-opacity duration-0 ${
              activeContent === item.id ? "opacity-100" : "opacity-0 absolute"
            }  w-full py-4 px-2`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
