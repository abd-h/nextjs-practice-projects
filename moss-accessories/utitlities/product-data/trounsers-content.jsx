import Link from "next/link";
import { trousers } from "../navlink-content/navbar-sublinks-data";

export default function TrousersContent() {
    return (
      <>
        {/* For larger screens */}
        <div
          className={`small_screens:hidden flex justify-evenly w-[80%] m-auto`}
        >
          <div className=" flex flex-col items-start">
            <h3 className="text-sm text-start font-semibold mb-4">Trouser</h3>
            <ul className="space-y-3  flex flex-col items-start">
              {trousers.trousers.map((item) => (
                <li key={item.id}>
                  <div className="group inline-block relative">
                    <Link href={item.href} className="group relative">
                      {item.title}
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
              {trousers.trousers_by_colour.map((item) => (
                <li key={item.id}>
                  <div className="group inline-block relative">
                    <Link href={item.href} className="group relative">
                      {item.title}
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
              {trousers.shorts.map((item) => (
                <li key={item.id}>
                  <div className="group inline-block relative">
                    <Link href={item.href} className="group relative">
                      {item.title}
                      <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* For smaller screens */}
        <div
          className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly scroll-m-1  `}
        >
          <div className=" flex flex-col items-start">
            <h3 className="text-sm text-start font-semibold mb-4">Trouser</h3>
            <ul className="space-y-3  flex flex-col items-start">
              {trousers.trousers.map((item) => (
                <li key={item.id}>
                  <div className="group inline-block relative">
                    <Link href={item.href} className="group relative">
                      {item.title}
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
              {trousers.trousers_by_colour.map((item) => (
                <li key={item.id}>
                  <div className="group inline-block relative">
                    <Link href={item.href} className="group relative">
                      {item.title}
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
              {trousers.shorts.map((item) => (
                <li key={item.id}>
                  <div className="group inline-block relative">
                    <Link href={item.href} className="group relative">
                      {item.title}
                      <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
}