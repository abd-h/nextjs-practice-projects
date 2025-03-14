"use client";

import { useState } from "react";

export default function CanvasPanel() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(window.scrollY);

  return (
    <>
      {/** Button to toggle the pannel */}
      <li className="relative">
        <div>
          <button onMouseEnter={handleToggle}>New in</button>
          {/** Dropdown Canvas Panel */}
          <div
            onMouseLeave={handleToggle}
            className={`fixed mt-4 pt-8 w-full left-0 right-0 bg-white shadow-md h-1/2 transition-transform duration-300 ${
              isOpen ? "visible" : " invisible "
            } `}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Product List</h2>
              <ul className="space-y-3 flex justify-between w-[80%] m-auto">
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Product 1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Product 2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Product 3
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Product 4
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline">
                    Product 5
                  </a>
                </li>
                {/* Add more product links as needed */}
              </ul>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
