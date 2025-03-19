//NavItems along with panel content

import { navlinkPanelContent } from "@/lib/dummy-navlink-list";

const { default: Link } = require("next/link");

const navSublinks = {
  style: [
    "2 peice suit",
    "3 peice suit",
    "Tuxedos",
    "Luxury suits",
    "Double-breasted suits",
    "Tweed suits",
    "Linen suits",
    "View all suits",
    "Waistcoats",
  ],
  occassions: [
    "Wedding party",
    "Wedding guest",
    "All wedding suits",
    "Race day suits",
    "Black tie",
    "Prom",
    "Graduation",
    "Interview attire",
  ],
  suits_by_colour: [
    "Blue suits",
    "Navy suits",
    "Grey suits",
    "Green suits",
    "Black suits",
    "Beige suits",
    "Brown suits",
    "White suits",
  ],
  jackets: [
    "Blazers",
    "Dinner jackets",
    "Valvet jackets",
    "Tweed jackets",
    "Casual jackets",
  ],
  services: [
    "Custom made",
    "Hire appointments",
    "Fabric samples",
    "Gift cards",
  ],
};






export const navItems = [
  {
    id: "New-in",
    label: "New in",
    panelContent: <Link href="/">New in</Link>,
  },
  {
    id: "suits",
    label: "Suits",
    panelContent: (
      <div className="p-6 flex text-[11px] font-[300]  justify-between w-[80%] m-auto ">
        <ul className="space-y-3 flex flex-col">
          <h3 className="text-sm font-semibold mb-4">Style</h3>
          {navSublinks.style.map((item, i) => (
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
          {navSublinks.occassions.map((item, i) => (
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
          {navSublinks.suits_by_colour.map((item, i) => (
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
          {navSublinks.jackets.map((item, i) => (
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
          {navSublinks.services.map((item, i) => (
            <li key={i}>
              <Link href="#" className='group relative' >
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    ),
  },

  {
    id: "weddings",
    label: "Weddings",
    panelContent: (
      <div>
        <h3>Weddings</h3>
        <ul className="flex flex-col">
          {navSublinks.occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "coats",
    label: "Coats",
    panelContent: (
      <div>
        <h3>Coats</h3>
        <ul className="flex flex-col">
          {navSublinks.occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "shirts",
    label: "Shirts",
    panelContent: (
      <div>
        <h3>Shirts</h3>
        <ul className="flex flex-col">
          {navSublinks.occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "trousers",
    label: "Trousers",
    panelContent: (
      <div>
        <h3>Trousers</h3>
        <ul className="flex flex-col">
          {navSublinks.occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "casual",
    label: "Casual",
    panelContent: (
      <div>
        <h3>Weddings</h3>
        <ul className="flex flex-col">
          {navSublinks.occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "custom-made",
    label: "Custom made",
    panelContent: (
      <div>
        <h3>Custom Made</h3>
        <ul className="flex flex-col">
          {navSublinks.occassions.map((item, i) => (
            <li key={i}>
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
];
