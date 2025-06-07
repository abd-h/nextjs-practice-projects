"use client";

import { usePathname } from "next/navigation";



export default function SuitsContentPage() {

  const pathname = usePathname()

  console.log('Current Pathname: ', pathname);
  
  

  return (
    <div className="text-blue-500 flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Suits Content Page</h1>
      <p className="text-lg">Explore our suits content collection.</p>
      {/* Add more content or components related to suits here */}
    </div>
  );
}