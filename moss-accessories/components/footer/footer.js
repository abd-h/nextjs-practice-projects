import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#28252a] text-white h-screen">
      <section>
        <nav className="tracking-wider flex justify-evenly w-2/3 m-auto pt-24">
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">Help</h2>
            </li>
            <li>
              {" "}
              <Link href="/">Delivery information</Link>
            </li>

            <li>
              <Link href="/">Refunds & returns</Link>
            </li>

            <li>
              <Link href="/">Refer a friend</Link>
            </li>
            <li>
              <Link href="/"></Link>
            </li>
            <li>
              <Link href="">Contact us</Link>
            </li>
            <li>
              <Link href="/">Terms and conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy policy</Link>
            </li>
            <li>
              <Link href="">Cookie policy</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">Style hints</h2>
            </li>
            <li>
              <Link href="">Size guide</Link>
            </li>
            <li>
              <Link href="/">Item care</Link>
            </li>
            <li>
              <Link href="/">Inside pocket</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">About us</h2>
            </li>
            <li>
              <Link href="/">Moss history</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Affiliates</Link>
            </li>
            <li>
              <Link href="/">Coporate</Link>
            </li>
            <li>
              <Link href="/">Modern slavery statement</Link>
            </li>
            <li>
              <Link href="/">Gender pay gap</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <h2 className="font-bold my-4">About us</h2>
            </li>
            <li>
              <Link href="/">Moss box subscription</Link>
            </li>
            <li>
              <Link href="/">Graduate discount</Link>
            </li>
            <li>
              <Link href="/">Gift cards</Link>
            </li>
            <li>
              <Link href="/">Key workers discount</Link>
            </li>
            <li>
              <Link href="/">Student discount</Link>
            </li>
            <li>
              <Link href="/">Purple disabled discount</Link>
            </li>
          </ul>
        </nav>
      </section>
      <section></section>
    </footer>
  );
}
