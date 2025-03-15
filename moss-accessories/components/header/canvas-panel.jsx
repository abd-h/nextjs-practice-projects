"use client";

import { useState } from "react";
import { navItems } from "./canves-panel-2";
import { navlinkPanelContent } from "@/lib/dummy-navlink-list";

export default function CanvasPanel({ label, item, i }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const s = navlinkPanelContent.map(item => {
    console.log(item.options.style);
    
  })
  
  return (
    <>
      {/** Button to toggle the pannel */}
      <li className="relative">
        <div
          onMouseEnter={() => setIsOpen(i)}
          onMouseLeave={() => setIsOpen(null)}
        >
          <button className='mb-4'>{label}</button>
          {/** Dropdown Canvas Panel */}
          <div
            className={`fixed  pt-8 w-screen left-0 right-0 bg-white shadow-md  transition-transform duration-400 ease-linear 
                 ${
                   isOpen
                     ? "translate-y-0 opacity-100 visible"
                     : "-translate-y-2 opacity-0 block pointer-events-none"
                 }
           `}
            // style={{ height: "50vh" }}
          >
            {isOpen === i && (
              <div className={`p-6 `}>
                <h2 className="text-2xl font-bold mb-4">Product List</h2>
                <ul className="space-y-3 flex justify-between w-[80%] m-auto">
                  {item.panelContent}
                  {/* Add more product links as needed */}
                </ul>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
