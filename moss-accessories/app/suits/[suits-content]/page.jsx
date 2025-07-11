"use client";

import { usePathname } from "next/navigation";



export default function SuitsContentPage() {
  // This will give you the current pathname
  const pathname = usePathname();

  // If you want to display the last part of the pathname which is the dynamic segment and comes after the last slash
  // const lastPart = pathname.split('/').pop();

  const lastPathname = pathname.substring(pathname.lastIndexOf('/') + 1).replace(/-/g, ' ')

  
  
  

  return (
    <div className="text-blue-500 flex flex-col items-center justify-center h-screen">
      <h1 className="first-letter:uppercase text-2xl font-bold mb-4">{ lastPathname }</h1>
      <p className="text-lg">Explore our suits content collection.</p>
      {/* Add more content or components related to suits here */}
    </div>
  );
}