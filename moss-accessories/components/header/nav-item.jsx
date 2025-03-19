"use client";

import Link from "next/link";
import { useState } from 'react';

export default function NavItem ({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCanvasPanel = () => {
    setIsHovered(true);
  };

  return (
    <li className="relative">
      <div onMouseEnter={handleCanvasPanel} onMouseLeave={handleCanvasPanel}>
        <Link href="#">{item.label}</Link>
        <div
          className={`
            absolute left-0 top-full w-1/2 bg-white text-black shadow-md 
            transition-transform duration-300 ease-in-out 
            ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0 pointer-events-none"
            }
          `}
        >{item.panelContent}</div>
        
      </div>
    </li>
  );
};
