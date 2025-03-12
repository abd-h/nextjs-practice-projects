import Link from "next/link";


export default function HeaderLinks() {

    return (
      <ul className="mb-0 ps-0 flex items-center justify-evenly w-full border-b-[1px] border-b-black-400">
        <li className=" border-r-[1px] py-2 px-8 text-center">
          <Link href="/" className="hover:underline">
            Moss
          </Link>
        </li>
        <li className=" border-r-[1px] py-2 px-8 text-center">
          <Link href="/" className="hover:underline">
            {" "}
            Moss Box Subscription
          </Link>
        </li>
        <li className=" border-r-[1px] py-2 px-8 text-center"><Link href="/" className="hover:underline">Gift Cards</Link></li>
        <li className="w-[30%]">
          <ul className="flex mb-0 ps-0  ">
            <li className=" w-full  ">
              <Link href="/" className="hover:underline">
                Book Store Appoinment
              </Link>
            </li>
          </ul>
        </li>
        <li className=" h-full border-l-[1px] w-[30%]">
          <ul className="mb-0 h-full ps-0 flex justify-evenly w-full items-center relative  my-0">
            <li className=" py-2 px-8 ">
              <Link href="/" className="hover:underline">
                Editorial
              </Link>
            </li>
            <li className="border-l-[1px] py-2 px-8 text-center">
              <Link href="/" className="hover:underline">
                Find a Store
              </Link>
            </li>
            <li className=" border-l-[1px] py-2 px-8 ">
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