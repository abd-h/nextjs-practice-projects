import React, { useContext } from "react";

import { MobileMenueContext } from "@/moss-context/navbar-context";
import Link from "next/link";

export default function ProductNavLinks({items, title}) {

  const {toggleMenu } = useContext(MobileMenueContext);
  
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-sm text-start font-semibold mt-4 pt-6">{title} </h3>
      <ul className="space-y-3 flex flex-col border-b-[1px] py-8 border-gray-700 px-2 ">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className="group inline-block relative" onClick={() => toggleMenu()}>
           
                {item.title}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}