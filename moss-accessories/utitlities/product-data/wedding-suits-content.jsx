import Link from "next/link";
import { weddings } from "../navlink-content/navbar-sublinks-data";

export default function WeddingsContent() {
  return (
    <>
      <div className="small_screens:hidden md_screens:hidden flex  mx-auto w-full  justify-evenly items-start">
        <div className="flex flex-col items-start">
          <h3 className="text-sm text-start font-semibold mb-4">
            Wedding suits
          </h3>
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
      <div className="larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly  ">
        <div className="space-y-3 flex flex-col border-b-[1px] py-8 border-gray-700 px-2 items-center">
          <ul className="space-y-3 flex flex-col items-start">
            <li className="text-sm text-start font-semibold mb-2">
              Wedding suits
            </li>
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

        <div className="space-y-3 flex flex-col border-b-[1px] py-8 border-gray-700 px-8 items-center ">
          <ul className="space-y-3  flex flex-col items-start">
            <li className="text-sm text-start font-semibold mb-4">
              Complete the look
            </li>
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

        <div className="space-y-3 flex flex-col border-b-[1px] py-8 border-gray-700 px-2 items-center">
          <ul className="space-y-3  flex flex-col items-start ">
            <li className="text-sm text-start font-semibold mb-4">Editorial</li>
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

        <div className="space-y-3 flex flex-col border-b-[1px] py-8 border-gray-700 px-2 items-center">
          <ul className="space-y-3 mx-auto  flex flex-col items-start px-4">
            <li className="text-sm  font-semibold mb-4">Services</li>
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
    </>
  );
}