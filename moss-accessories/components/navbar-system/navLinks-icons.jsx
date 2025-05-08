 'use client'
import Link from "next/link";
import Image from "next/image";

import wishList from "@/assets/wish-list.png";
import searchIcon from "@/assets/search-icon.png";
import profileIcon from "@/assets/profile-icon-2.png";
import basketIcon from "@/assets/basket-icon.png";
import { useContext } from "react";
import { MobileMenueContext } from "@/moss-context/navbar-context";

const linkIcons = [
  {
    name: 'Search',
    image: searchIcon
  }, 
  {
    name: 'Wish list',
    image: wishList
  },
  {
    name: 'Profile',
    image: profileIcon
  },
  {
    name: 'Basket',
    image: basketIcon

  }
]

export default function NavLinksIcons() {
  const mobileContext = useContext(MobileMenueContext);
  const { isMenuOpen } = mobileContext;
  console.log(isMenuOpen);
  
    return (
      <>
        <ul className="small_screens:w-[50%]  md_screens:w-[50%] flex justify-evenly larger_screens:w-[15%]">
          {linkIcons.map((icon) => (
            <li key={icon.name}>
              <Link href="/">
                <Image
                  style={{ maxWidth: "auto", maxHeight: "auto" }}
                  src={icon.image}
                  alt={icon.name}
                  className="h-6 w-6 max-h-[auto] max-w-[auto] md_screens:h-8 md_screens:max-h-[auto] md_screens:w-8 small_screens:h-4 small_screens:w-4 
                small_screens:max-h-[auto]"
                />{" "}
              </Link>
            </li>
          ))}

          {/*   <li>
          <Link href="/">
            <Image
              src={wishList}
              className="h-6 w-6 md_screens:h-8 md_screens:w-8 small_screens:h-4 small_screens:w-4"
              alt="Wish list icon"
            />
          </Link>
        </li>
        <li className="small_screens:hidden">
          <Link href="/">
            <Image
              src={profileIcon}
              className="h-6 w-6 md_screens:h-8 md_screens:w-8 small_screens:h-4 small_screens:w-4"
              alt="Wish list icon"
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={basketIcon}
              className="h-6 w-6 md_screens:h-8 md_screens:w-8 small_screens:h-4 small_screens:w-4"
              alt="Wish list icon"
            />
          </Link>
        </li>*/}
        </ul>
        
      </>
    );
}