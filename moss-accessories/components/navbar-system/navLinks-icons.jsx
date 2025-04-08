 
import Link from "next/link";
import Image from "next/image";

import wishList from "@/assets/wish-list.png";
import searchIcon from "@/assets/search-icon.png";
import profileIcon from "@/assets/profile-icon-2.png";
import basketIcon from "@/assets/basket-icon.png";

export default function NavLinksIcons() {
    return (
      <ul className="small_screens:w-[50%]  md_screens:w-1/3 flex justify-evenly larger_screens:w-[15%]">
        <li>
          <Link href="/">
            <Image
              src={searchIcon}
              className="h-6 w-6 md_screens:h-8 md_screens:w-8 small_screens:h-4 small_screens:w-4"
              alt="Search icon"
            />{" "}
          </Link>
        </li>
        <li>
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
        </li>
      </ul>
    );
}