"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import wishList from "@/assets/wish-list.png";
import searchIcon from "@/assets/search-icon.png";
import profileIcon from "@/assets/profile-icon-2.png";
import basketIcon from "@/assets/basket-icon.png";
import CanvasPanel from "./canvas-panel";

export default function NavLinks() {
  const [sticky, setSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  console.log(window.scrollY);
  
    
  return (
    <nav
      className={`${
        sticky ? "py-8 top-[-8px] fixed bg-white transition-all" : ""
      } bg-white mt-2 p-6 w-full h-8 overflow-hidden justify-between flex items-center`}
    >
      <ul>
        <li>
          <Link href="/">
            <svg viewBox="0 0 178.8 45.4" width="95" height="24">
              <path
                d="M47.6 44.1h-6.1L39 6.3 26.8 44.1h-7L7.8 6 5.7 44.1H0L2.6 1.2h9.6l11.3 36.2L35.2 1.2h9.1l3.3 42.9zM78.6 0C66.1 0 55.9 10.1 55.9 22.7c0 12.5 10.2 22.7 22.7 22.7s22.7-10.2 22.7-22.7C101.2 10.2 91.1 0 78.6 0zm0 39.8c-9.5 0-17.1-7.7-17.1-17.1S69.1 5.6 78.6 5.6s17.1 7.7 17.1 17.1S88 39.8 78.6 39.8zM111 40.4v-6.2c3.7 3.3 8.1 5.6 13.4 5.6 5.5 0 8.3-2.4 8.3-6.6 0-3.4-1.7-5-8-7.7l-4-1.7c-6.3-2.7-9.5-6.4-9.5-11.8 0-7 5.2-12 13.9-12 5.8 0 10 2.2 12.1 4.2v6.4c-3.2-3.1-6.9-5-11.9-5-5.3 0-8 2.2-8 6 0 3.5 2.4 5.3 7.2 7.3l4.3 1.9c7.3 3.2 10.2 6.7 10.2 12.1 0 7.4-5.5 12.5-14.2 12.5-4.8 0-9.8-1.6-13.8-5zm39.8 0v-6.2c3.7 3.3 8.1 5.6 13.4 5.6 5.5 0 8.3-2.4 8.3-6.6 0-3.4-1.7-5-8-7.7l-4-1.7c-6.3-2.7-9.5-6.4-9.5-11.8 0-7 5.2-12 13.9-12 5.8 0 10 2.2 12.1 4.2v6.4c-3.2-3.1-6.9-5-11.9-5-5.3 0-8 2.2-8 6 0 3.5 2.4 5.3 7.2 7.3l4.3 1.9c7.3 3.2 10.2 6.7 10.2 12.1 0 7.4-5.5 12.5-14.2 12.5-4.8 0-9.8-1.6-13.8-5z"
                vectorEffect="non-scaling-stroke"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
      <ul className="flex justify-evenly w-[60%] self-center items-center relative ">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          
          <CanvasPanel />
        </li>
        <li>
          <Link href="suit" className="hover:underline">
            Suit
          </Link>{" "}
        </li>
        <li>
          <Link href="weddings" className="hover:underline">
            Weddings
          </Link>
        </li>
        <li>
          <Link href="coats" className="hover:underline">
            Coats
          </Link>
        </li>
        <li>
          <Link href="shirts" className="hover:underline">
            Shirts
          </Link>
        </li>
        <li>
          <Link href="trousers" className="hover:underline">
            Trousers
          </Link>
        </li>
        <li>
          <Link href="casual" className="hover:underline">
            Casual
          </Link>
        </li>
        <li>
          <Link href="shoes-and-accessories" className="hover:underline">
            Shoes & accessories
          </Link>{" "}
        </li>
        <li>
          <Link href="custom-made" className="hover:underline">
            Custom Made
          </Link>
        </li>
      </ul>
      <ul className="flex justify-evenly w-[15%]">
        <li>
          <Link href="/">
            <Image src={searchIcon} className="h-6 w-6" alt="Search icon" />{" "}
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={wishList} className="h-6 w-6" alt="Wish list icon" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={profileIcon} className="h-6 w-6" alt="Wish list icon" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={basketIcon} className="h-6 w-6" alt="Wish list icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
