"use client";

import { useState, useEffect } from "react";


import ComplexNavbar from "./mobile-navbar";
import { navItems } from "@/utitlities/navlink-content/navbar-item-data";

export default function NavbarSystem() {
  const [activeContent, setActiveContent] = useState(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  
console.log(!navItems[0].hasOwnProperty("content"));

  // Handle panel visibility with delay
  useEffect(() => {
    if (
      (activeContent && isMounted)
    ) {
      setIsPanelVisible(true);
    } 
    else {
      const timer = setTimeout(() => setIsPanelVisible(false), 300);

      return () => clearTimeout(timer);
    }
  }, [activeContent, isMounted]);

  return (
    <div
      className="relative w-1/2"
      onMouseLeave={() => {
        setActiveContent(null);
        setIsMounted(false);
      }}
    >
      <nav className="small_screens:hidden md_screens:hidden flex items-center  justify-between  relative  larger_screens:m-2">
        <div className="text-grey-600 text-sm px-2 hover:text-blue-600 ">
          New{" "}
        </div>
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
        className={`fixed left-0 w-full  bg-white   transition-opacity duration-0 ${
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
