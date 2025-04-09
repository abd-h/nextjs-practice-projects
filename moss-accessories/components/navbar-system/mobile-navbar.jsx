

"use client";
import { useContext } from "react";
import Link from "next/link";
import { navItems } from "@/utitlities/navlink-content/navbar-item-data";
import { MobileMenueContext } from "@/moss-context/navbar-context";

export default function MobileNavbar() {

  const menuContext = useContext(MobileMenueContext);

  const { isMenuOpen, currentMenu,  toggleMenu, handleNavItemClick, handleBack } = menuContext;


  console.log(currentMenu);
  


  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [currentMenu, setCurrentMenu] = useState(null);
  // const [menuHistory, setMenuHistory] = useState([]);

//   const navItems = [
//     {
//       name: "Home",
//       href: "/",
//     },
//     {
//       name: "Products",
//       subItems: [
//         { name: "All Products", href: "/products" },
//         {
//           name: "Categories",
//           subItems: [
//             { name: "Electronics", href: "/categories/electronics" },
//             { name: "Clothing", href: "/categories/clothing" },
//           ],
//         },
//         { name: "Sale", href: "/sale" },
//       ],
//     },
//     {
//       name: "Services",
//       subItems: [
//         { name: "Consulting", href: "/consulting" },
//         { name: "Training", href: "/training" },
//       ],
//     },
//   ];

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   if (!isMenuOpen) {
  //     setCurrentMenu(null);
  //     setMenuHistory([]);
  //   }
  // };

  // const handleNavItemClick = (item) => {
  //   if (item.content) {
  //     setMenuHistory([...menuHistory, currentMenu]);
  //     setCurrentMenu(item);
  //   }
  // };

  // const handleBack = () => {
  //   const prevMenu = menuHistory.pop();
  //   setCurrentMenu(prevMenu);
  //   setMenuHistory([...menuHistory]);
  // };

    console.log(navItems);
    

    
  return (
    <nav
      aria-label="Main navigation"
      className=" relative larger_screens:hidden"
    >
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className=" z-50 p-2 rounded-md  text-black "
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="h-8 w-8 small_screens:h-6 small_screens:w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay and Menu Container */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />

        {/* Sliding Menu */}
        <div
          className={`relative h-full w-1/2  bg-white transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <p className={`${currentMenu? 'hidden' :'block'}`}>New menu!</p>
          <div className="h-full flex flex-col ">
            {/* Menu Header */}
            <div
              className={`${
                currentMenu ? "visible" : "hidden border-b-0"
              } border-b flex items-center gap-4`}
            >
              {currentMenu && (
                <button
                  onClick={handleBack}
                  className="py-4 hover:bg-gray-100 rounded"
                  aria-label="Go back to previous menu"
                >
                  <svg
                    className="outline h-8 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}
              <h2 className="font-semibold  text-center  w-1/2">
                {currentMenu ? currentMenu.title : ""}
              </h2>
            </div>

            {/* Menu Items */}
            <ul className="flex-1 overflow-y-auto small_screens:p-0 md_screens:p-0 p-4 space-y-2  ">
              {currentMenu
                ? currentMenu.content
                : navItems.map((item) => (
                    // mobile main navlinks
                    <li
                      className="first:mt-14  p-4 text-sm tracking-widest  border-b-[1px_solid_black] border-b-[1px]"
                      key={item.id}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className={`block p-8 rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none `}
                          onClick={toggleMenu}
                          tabIndex={isMenuOpen ? 0 : -1}
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavItemClick(item)}
                          className=" w-full text-left p-2 rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                          aria-expanded={!!item.subItems}
                          tabIndex={isMenuOpen ? 0 : -1}
                        >
                          <div className="flex justify-between items-center  ml-4">
                            {item.title}
                            {item.subItems && (
                              <svg
                                className="h-5 w-5 "
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </div>
                        </button>
                      )}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}





// export default function ComplexNavbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   // to toggle munue
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const toggleSubmenu = (index) =>
//     setOpenSubmenu(openSubmenu === index ? null : index);

//     const navItems = [
//         { id: "suits", title: "Suits", content: SuitsContent() },
//         { id: "weddings", title: "Weddings", content: WeddingsContent() },
//         { id: "shirts", title: "Shirts", content: ShirtsContent() },
//         { id: "trousers", title: "Trousers", content: TrousersContent() },
//         {
//           id: "shoes_and_accessories",
//           title: "Shoes & accessories",
//           content: ShoesAndAccessoriesContent(),
//         },
//         { id: "custom_made", title: "Custom Made", content: CustomMadeContent() },
//       ];
//   return (
//     <nav className="" aria-label="Main Navigation">
//       {/* Mobile Menu */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-black p-2 rounded-md "
//           aria-label="Toggle menu"
//           aria-expanded={isMenuOpen}
//         >
//           <svg
//             className="h-7 w-7"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMenuOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//           </div>
          
//     </nav>
//   );
// }
