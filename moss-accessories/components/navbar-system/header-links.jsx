import Link from "next/link";
import ChangingText from "./changing-text";


export default function HeaderLinks() {

    return (
      <ul className="small_screens:w-full mb-0 ps-0 larger_screens:flex md_screens:flex larger_screens:items-center justify-evenly w-full border-b-[1px] border-b-black-400">
        <li className="small_screens:hidden border-r-[1px] py-2 px-8 text-center">
          <Link href="/" className="hover:underline">
            Moss
          </Link>
        </li>
        <li className="small_screens:hidden border-r-[1px] py-2 px-8 text-center">
          <Link href="/" className="hover:underline">
            {" "}
            Moss Box Subscription
          </Link>
        </li>
        <li className="small_screens:hidden border-r-[1px] py-2 px-8 text-center">
          <Link href="/" className="hover:underline">
            Gift Cards
          </Link>
        </li>
        <li className="small_screens:p-2  small_screens:w-full small_screens:m-auto w-[30%]">
          <ul className="flex mb-0 ps-0  small_screens:text-center small_screens:w-full">
            <ChangingText />
          </ul>
        </li>
        <li className=" h-full border-l-[1px] w-[30%]">
          <ul className="mb-0 h-full ps-0 flex justify-evenly w-full items-center relative  my-0">
            <li className="small_screens:hidden py-2 px-8 ">
              <Link href="/" className="hover:underline">
                Editorial
              </Link>
            </li>
            <li className="small_screens:hidden border-l-[1px] py-2 px-8 text-center">
              <Link href="/" className="hover:underline">
                Find a Store
              </Link>
            </li>
            <li className="small_screens:hidden border-l-[1px] py-2 px-8 ">
              <Link href="/" className="hover:underline">
                GP £
              </Link>{" "}
              ▼
            </li>
          </ul>
        </li>
      </ul>
    );
}