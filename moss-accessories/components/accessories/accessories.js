'use client';
import { useState } from 'react';

import Link from 'next/link';
import FilterButton from './filter-button';
import FilterSidebar from './filter-sidebar';

export default function AccessoriesPage({dummyTies}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
      <div className=" w-full relative min-h-screen ">
        {/* Main content of your accessories page */}
        <nav>
          <ul className="flex gap-8 text-[0.95rem] leading-4 font-thin underline p-4 ">
            {dummyTies.map((ties) => (
              <Link href={ties.href} key={ties.id}>
                <li className=" tracking-widest cursor-pointer">{ties.title} </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* Filter Sidebar */}
        <FilterButton onClick={toggleSidebar}  />
        <FilterSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>
    );
}