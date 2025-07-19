
import Link from "next/link";

export default function FooterNavLinks() {

    return (
      <footer >
        <nav className=" small_screens:hidden tracking-wider flex justify-evenly w-2/3 m-auto pt-16">
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">Help</h2>
            </li>
            <li>
              {" "}
              <Link href="/" className="hover:underline">
                Delivery information
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:underline">
                Refunds & returns
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:underline">
                Refer a friend
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Site map
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Cookie policy
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">Style hints</h2>
            </li>
            <li>
              <Link href="" className="hover:underline">
                Size guide
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Item care
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Inside pocket
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">About us</h2>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Moss history
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Affiliates
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Coporate
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Modern slavery statement
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Gender pay gap
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">About us</h2>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Moss box subscription
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Graduate discount
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Gift cards
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Key workers discount
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Student discount
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Purple disabled discount
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
}