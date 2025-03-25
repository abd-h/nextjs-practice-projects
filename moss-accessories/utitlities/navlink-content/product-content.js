 import Link from "next/link";

import { custom_made, shirts, shoes_and_accessories, suits, trousers, weddings } from "./navbar-sublinks-data";


export function Suits() {
    return (
      <div className="p-6 flex text-[11px] font-[300]  justify-between w-[80%] m-auto ">
        <ul className="space-y-3 flex flex-col">
          <h3 className="text-sm font-semibold mb-4">Style</h3>
          {suits.style.map((item, i) => (
            <li key={i}>
              <div className="group inline-block relative">
                <Link href="/" className="group relative">
                  {item}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Occoassins</h3>
          {suits.occassions.map((item, i) => (
            <li key={i}>
              <Link className="relative group" href="/">
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Suits by color</h3>
          {suits.suits_by_colour.map((item, i) => (
            <li key={i}>
              <Link href="#" className="group relative">
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Jackets</h3>
          {suits.jackets.map((item, i) => (
            <li key={i}>
              <Link href="#" className="group relative">
                {item}

                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
        <ul className="flex space-y-3 flex-col">
          <h3 className="text-sm font-semibold mb-4">Services</h3>
          {suits.services.map((item, i) => (
            <li key={i}>
              <Link href="#" className="group relative">
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    );
}

export function Weddings() {
    return (
      <div>
        <div>
          <h3>Weddings</h3>
          <ul className="flex flex-col">
            {weddings.wedding_suits.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Complete the look</h3>
          <ul className="flex flex-col">
            {weddings.complete_the_look.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Editorial</h3>
          <ul className="flex flex-col">
            {weddings.editorial.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul className="flex flex-col">
            {weddings.services.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export function Shirts() {
    return (
      <div>
        <div>
          <h3>Shirts</h3>
          <ul className="flex flex-col">
            {shirts.formal.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Shirts</h3>
          <ul className="flex flex-col">
            {shirts.casual.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Shirts by colour</h3>
          <ul className="flex flex-col">
            {shirts.shirts_by_colour.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Fit</h3>
          <ul className="flex flex-col">
            {shirts.fit.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export function Trousers() {
    return (
      <div>
        <div>
          <h3>Trousers</h3>
          <ul className="flex flex-col">
            {trousers.trousers.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Trousers by colour</h3>
          <ul className="flex flex-col">
            {trousers.trousers.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Shorts</h3>
          <ul className="flex flex-col">
            {trousers.shorts.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export function ShoesAndAccessories() {
    return (
      <div>
        <div>
          <h3>Shoes and accessories</h3>
          <ul className="flex flex-col">
            {shoes_and_accessories.shoes.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Shoes and accessories</h3>
          <ul className="flex flex-col">
            {shoes_and_accessories.accessories.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export function CustomMade () {
    return (
      <div className="p-6 flex text-[11px] font-[300]  justify-between w-[80%] m-auto ">
        <div>
          <h3>Custom made</h3>
          <ul className="flex flex-col">
            {custom_made.custom_made.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Design it now</h3>
          <ul className="flex flex-col">
            {custom_made.design_it_now.map((item, i) => (
              <li key={i}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}