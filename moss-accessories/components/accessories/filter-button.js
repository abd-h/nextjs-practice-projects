"use client";

import { Plus, Minus } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

import Link from 'next/link';

const dummyFilters = [
  { id: 1, title: "All filters" },
  { id: 2, title: "Brand" },
  { id: 3, title: "Colour" },
  { id: 4, title: "Design" },
  { id: 5, title: "Fabric" },
];

export default function FilterButton({ onClick, isOpen }) {
  const [activeFilter] = useState(dummyFilters);
  const [isExpandedItemId, setIsExpandedItemId] = useState(null);

    const handleFilterId = (filterId) => {
        // This function handles the filter ID when a filter is clicked
        // setActiveFilter(activeFilter.map(filter => filter.id === filterId? {...filter, isExpanded: !filter.isExpanded} : filter))
        // console.log(`Filter Id: ${filterId}`);
        
   
      if (isOpen) {
        onClick();
      } else {
        setIsExpandedItemId((prev) => (prev === filterId ? null : filterId));
       
      }
    }
console.log('Sidebar is open:', isOpen);

  return (
    <div className="flex justify-center items-center">
      <section className="small_screens:hidden md_screens:hidden w-4/5 mx-auto relative">
        <nav className="flex absolute left-1/2 transform -translate-x-1/2 w-screen my-2 py-2 bg-gradient-to-r justify-start border-y-2 border-gray-300 ">
          <ul className="flex w-1/2 justify-start items-center gap-2">
            {activeFilter.map((filter, i) => (
              <li onClick={() => handleFilterId(filter.id)} key={filter.id}>
                <div
                  className="first-of-type:ml-12 cursor-pointer flex gap-4 justify-center items-center p-2 text-center"
                  onClick={onClick}
                >
                  {filter.title}
                  {i === 0 ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8h18M3 16h18"
                      />
                      <circle
                        cx="9"
                        cy="8"
                        r="1.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="white"
                      />
                      <circle
                        cx="15"
                        cy="16"
                        r="1.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="white"
                      />
                    </svg>
                  ) : isOpen && isExpandedItemId === filter.id ? (
                    <Minus className="h-4 w-4 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-4 w-4 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
                  )}
                </div>
                <span>{} </span>
              </li>
            ))}
          </ul>
          <ul className="h-full self-center absolute right-12 flex w-1/3 justify-end gap-14 items-center">
            <li className="border-x-2 w-1/3 border-gray-300 h-full  flex items-center justify-center">
              <span className='p-2 font-bold'>{23}</span> Items
            </li>
            <li className="flex items-center gap-2">
              Sorted by
              <svg
                className="w-7 h-7 font-extralight"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </section>
      <section className="larger_screens:hidden w-4/5 mx-auto relative">
        <nav className="flex absolute left-1/2 transform -translate-x-1/2 w-screen my-2 py-2 bg-gradient-to-r justify-start border-y-2 border-gray-300 ">
          <ul className="flex w-1/2 justify-start items-center gap-2">
            {activeFilter.map((filter, i) => (
              <li onClick={() => handleFilterId(filter.id)} key={filter.id}>
                <div
                  className={`${
                    filter.title !== "All filters" ? "hidden" : "visible"
                  } first-of-type:ml-12 cursor-pointer flex gap-4 justify-center items-center p-2 text-center`}
                  onClick={onClick}
                >
                  {filter.title}
                  {i === 0 ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8h18M3 16h18"
                      />
                      <circle
                        cx="9"
                        cy="8"
                        r="1.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="white"
                      />
                      <circle
                        cx="15"
                        cy="16"
                        r="1.5"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="white"
                      />
                    </svg>
                  ) : isOpen && isExpandedItemId === filter.id ? (
                    <Minus className="h-4 w-4 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-4 w-4 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
                  )}
                </div>
                <span>{} </span>
              </li>
            ))}
          </ul>
          <ul className="flex w-1/3 justify-end gap-12 items-center">
            <li className="outline">Items</li>
            <li className="outline flex items-center gap-2">
              Sorted by
              <svg
                className="w-8 h-8 font-extralight"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}



          