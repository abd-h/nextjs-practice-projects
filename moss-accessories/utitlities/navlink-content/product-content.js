'use client';
import Link from "next/link";

import {
  custom_made,
  shirts,
  shoes_and_accessories,
  suits,
  trousers,
  weddings,
} from "./navbar-sublinks-data";

// export  function SuitsContent() {
  

//   return (
//     <>
//       <div
//         className={`small_screens:hidden md_screens:hidden flex larger_screens:flex-row small_screens:flex-col md_screens:flex-col  mx-auto w-[80%]  justify-evenly `}
//       >
//         <ul className="space-y-3 outline mb-4 flex-col ">
//           <h3 className="text-sm font-semibold mb-4 outline">Style</h3>
//           {suits.style.map((item) => (
//             <li key={item.id}>
//               <div className="group inline-block relative">
//                 <Link href={item.href} className="group relative">
//                   {item.title}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Occoassins</h3>
//           {suits.occassions.map((item) => (
//             <li key={item.id}>
//               <Link className="relative group" href={item.href}>
//                 {item.title}
//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Suits by color</h3>
//           {suits.suits_by_colour.map((item) => (
//             <li key={item.id}>
//               <Link href={item.href} className="group relative">
//                 {item.title}
//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>{" "}
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Jackets</h3>
//           {suits.jackets.map((item) => (
//             <li key={item.id}>
//               <Link href={item.href} className="group relative">
//                 {item.title}

//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>{" "}
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Services</h3>
//           {suits.services.map((item, i) => (
//             <li key={i}>
//               <Link href="#" className="group relative">
//                 {item}
//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>{" "}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div
//         className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly`}
//       >
//         <ul className="space-y-3 outline mb-4 flex-col p-0">
//           <h3 className="text-sm font-semibold mb-4">Style</h3>
//           {suits.style.map((item) => (
//             <li key={item.id}>
//               <div className="group inline-block relative">
//                 <Link href={item.href} className="group relative">
//                   {item.title}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Occoassins</h3>
//           {suits.occassions.map((item) => (
//             <li key={item.id}>
//               <Link className="relative group" href={item.href}>
//                 {item.title}
//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Suits by color</h3>
//           {suits.suits_by_colour.map((item) => (
//             <li key={item.id}>
//               <Link href={item.href} className="group relative">
//                 {item.title}
//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>{" "}
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Jackets</h3>
//           {suits.jackets.map((item) => (
//             <li key={item.id}>
//               <Link href={item.href} className="group relative">
//                 {item.title}

//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>{" "}
//             </li>
//           ))}
//         </ul>
//         <ul className="flex space-y-3 flex-col">
//           <h3 className="text-sm font-semibold mb-4">Services</h3>
//           {suits.services.map((item, i) => (
//             <li key={i}>
//               <Link href="#" className="group relative">
//                 {item}
//                 <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//               </Link>{" "}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

export function WeddingsContent() {
  return (
    <div className="flex justify-evenly w-[80%]  m-auto">
      <div className="flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Wedding suits</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {weddings.wedding_suits.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">
          Complete the look
        </h3>
        <ul className="space-y-3  flex flex-col items-start">
          {weddings.complete_the_look.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Editorial</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {weddings.editorial.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Services</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {weddings.services.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export function ShirtsContent() {
//   return (
//     <div className="flex justify-evenly w-[80%]">
//       <div className=" flex flex-col items-start">
//         <h3 className="text-sm text-start font-semibold mb-4">Shirts</h3>
//         <ul className="space-y-3  flex flex-col items-start">
//           {shirts.formal.map((item, i) => (
//             <li key={i}>
//               <div className="group inline-block relative">
//                 <Link href="#" className="group relative">
//                   {item}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex flex-col items-start">
//         <h3 className="text-sm text-start font-semibold mb-4">Casual</h3>
//         <ul className="space-y-3  flex flex-col items-start">
//           {shirts.casual.map((item, i) => (
//             <li key={i}>
//               <div className="group inline-block relative">
//                 <Link href="#" className="group relative">
//                   {item}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex flex-col items-start">
//         <h3 className="text-sm text-start font-semibold mb-4">
//           Shirts by colour
//         </h3>
//         <ul className="space-y-3  flex flex-col items-start">
//           {shirts.shirts_by_colour.map((item, i) => (
//             <li key={i}>
//               <div className="group inline-block relative">
//                 <Link href="#" className="group relative">
//                   {item}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex flex-col items-start">
//         <h3 className="text-sm text-start font-semibold mb-4">Fit</h3>
//         <ul className="space-y-3  flex flex-col items-start">
//           {shirts.fit.map((item, i) => (
//             <li key={i}>
//               <div className="group inline-block relative">
//                 <Link href="#" className="group relative">
//                   {item}
//                   <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export function TrousersContent() {
  return (
    <div className="flex justify-evenly w-[80%] m-auto">
      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Trouser</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {trousers.trousers.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">
          Trouser by colour
        </h3>
        <ul className="space-y-3  flex flex-col items-start">
          {trousers.trousers_by_colour.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Shorts</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {trousers.shorts.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ShoesAndAccessoriesContent() {
  return (
    <div className="flex justify-evenly w-[80%] m-auto">
      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">
          Shoes and accessories
        </h3>
        <ul className="space-y-3  flex flex-col items-start">
          {shoes_and_accessories.shoes.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Accessories</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {shoes_and_accessories.accessories.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CustomMadeContent() {
  return (
    <div className="p-6 flex text-[11px] font-[300]  justify-between w-[80%] m-auto ">
      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Custom made</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {custom_made.custom_made.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex flex-col items-start">
        <h3 className="text-sm text-start font-semibold mb-4">Design it now</h3>
        <ul className="space-y-3  flex flex-col items-start">
          {custom_made.design_it_now.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="#" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
