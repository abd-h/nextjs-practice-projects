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
        
     setIsExpandedItemId((prev) => prev === filterId ? null : filterId)
        
    }
console.log('Sidebar is open:', isOpen);

  return (
    <section className="w-4/5 mx-auto relative">
      <nav className="flex absolute left-1/2 transform -translate-x-1/2 w-screen my-8 py-4 bg-gradient-to-r justify-start border-y-2 border-gray-300 ">
        <ul className="flex w-1/2 justify-around ">
          {activeFilter.map((filter) => (
            <li onClick={() => handleFilterId(filter.id)} key={filter.id}>
              <div
                className="cursor-pointer flex gap-4 justify-center items-center p-2 text-center"
                onClick={onClick}
              >
                {" "}
                {filter.title}
                {isExpandedItemId === filter.id ? (
                  <Minus className="h-4 w-4 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
                ) : (
                  <Plus className="h-4 w-4 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
                )}
              </div>
              <span>{} </span>
            </li>
          ))}
        </ul>
        <ul className="flex w-1/3 justify-around items-center">
          <li>Items</li>
          <li>Sorted by </li>
        </ul>
      </nav>
    </section>
  );
}



            //   <Plus className="h-8 w-8 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />
            //   <Minus className="h-8 w-8 text-black cursor-pointer hover:scale-110 transition-transform duration-200" />