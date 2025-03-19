"use client";

import { useState } from "react";
import { navItems } from "./canves-panel-2";
import { navlinkPanelContent } from "@/lib/dummy-navlink-list";

export default function CanvasPanel({ label, item, i }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const s = navlinkPanelContent.map((item) => {
    console.log(item.options.style);
  });

  return (
    <>
      {/** Button to toggle the pannel */}
      <li className="relative">
        <div
          onMouseEnter={() => setIsOpen(i)}
          onMouseLeave={() => setIsOpen(null)}
        >
          
          <button className="mb-4 font-bold">{label}</button>
          <div className=" bg-[#282828] w-0 hover:animate-underline"></div>

          {/** Dropdown Canvas Panel */}
          <div
            className={`fixed  w-screen left-0 right-0 bg-white shadow-md  transition-transform duration-400 ease-linear 
                 ${
                   isOpen
                     ? "translate-y-0 opacity-100 visible"
                     : "-translate-y-2 opacity-0 block pointer-events-none"
                 }
           `}
            // style={{ height: "50vh" }}
          >
            {isOpen === i && (
              <div className={`p-2 m-auto`}>
              
                <ul className="space-y-3 flex justify-between m-auto">
                  {item.panelContent}
                  {/* Add more product links as needed */ }
                  
                </ul>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
