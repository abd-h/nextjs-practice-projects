// components/Navbar.js
"use client";
import { useState } from "react";

const Navbar = () => {
  const [activePanel, setActivePanel] = useState(null);

  const navItems = [
    {
      id: 1,
      title: "New In",
      panelContent: (
        <div className="p-8">
          <h2 className="text-2xl mb-4">New In</h2>
          <ul className="space-y-3">
            <li>
              <a href="/new-in/clothing" className="hover:text-gray-700">
                Clothing
              </a>
            </li>
            <li>
              <a href="/new-in/shoes" className="hover:text-gray-700">
                Shoes
              </a>
            </li>
            <li>
              <a href="/new-in/accessories" className="hover:text-gray-700">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "Clothing",
      panelContent: (
        <div className="p-8">
          <h2 className="text-2xl mb-4">Clothing</h2>
          <ul className="space-y-3">
            <li>
              <a href="/clothing/jackets" className="hover:text-gray-700">
                Jackets
              </a>
            </li>
            <li>
              <a href="/clothing/shirts" className="hover:text-gray-700">
                Shirts
              </a>
            </li>
            <li>
              <a href="/clothing/trousers" className="hover:text-gray-700">
                Trousers
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Shoes",
      panelContent: (
        <div className="p-8">
          <h2 className="text-2xl mb-4">Shoes</h2>
          <ul className="space-y-3">
            <li>
              <a href="/shoes/boots" className="hover:text-gray-700">
                Boots
              </a>
            </li>
            <li>
              <a href="/shoes/sneakers" className="hover:text-gray-700">
                Sneakers
              </a>
            </li>
            <li>
              <a href="/shoes/loafers" className="hover:text-gray-700">
                Loafers
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      title: "Accessories",
      panelContent: (
        <div className="p-8">
          <h2 className="text-2xl mb-4">Accessories</h2>
          <ul className="space-y-3">
            <li>
              <a href="/accessories/bags" className="hover:text-gray-700">
                Bags
              </a>
            </li>
            <li>
              <a href="/accessories/watches" className="hover:text-gray-700">
                Watches
              </a>
            </li>
            <li>
              <a href="/accessories/jewelry" className="hover:text-gray-700">
                Jewelry
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      title: "Brands",
      panelContent: (
        <div className="p-8">
          <h2 className="text-2xl mb-4">Brands</h2>
          <ul className="space-y-3">
            <li>
              <a href="/brands/gucci" className="hover:text-gray-700">
                Gucci
              </a>
            </li>
            <li>
              <a href="/brands/prada" className="hover:text-gray-700">
                Prada
              </a>
            </li>
            <li>
              <a href="/brands/balenciaga" className="hover:text-gray-700">
                Balenciaga
              </a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="group inline-block relative">
      <span className="text-lg font-semibold">Hover over me</span>
      <div className="absolute left-0 right-0 bottom-0 h-[2px] w-0 bg-black group-hover:animate-underlineFromCenter"></div>
    </div>
  );
};

export default Navbar;
