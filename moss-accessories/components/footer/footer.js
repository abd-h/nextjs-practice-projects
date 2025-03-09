import Image from "next/image";
import Link from "next/link";

import facebookIcon from "@/assets/facebook.png";
import tiktokIcon from "@/assets/tiktok.png";
import youtubeIcon from "@/assets/youtube_icon.png";
import instagramIcon from "@/assets/instagram_icon.png";
import pinterestIcon from "@/assets/pinterest_icon.png";
import prostateCancerLogo from "@/assets/prostatecancerlogo.webp";

export default function Footer() {
  return (
    <footer className="w-full bg-[#28252a] text-white">
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
      <section className="h-[400px] border-y border-y-[#777777] mt-12 flex items-center justify-center  relative">
        <div className="w-1/2 justify-center ">
          {" "}
          <form>
            <p className="py-4 flex flex-col w-[70%] m-auto relative">
              <label className="text-sm tracking-wider py-4" htmlFor="email">
                Signup today to get the latest news and be the first to hear
                about our exclusive offers
              </label>
              <input
                className="bg-[#28252a] border-b border-b-[white]"
                type="email"
                name="email"
                id="email"
              />
              <button
                className="absolute bottom-6 right-0 font-bold"
                type="submit"
              >
                Submit
              </button>
            </p>
          </form>
          <div className="w-1/2 flex justify-center gap-2">
            <div
              className=" flex justify-start ml-[-10px] my-4  items-center gap-2
            "
            >
              <Link className="" href="">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={facebookIcon}
                  alt="Facebook logo"
                />
              </Link>
              <Link href="">
                <Image
                  className="w-[20px] rounded-full overflow-hidden "
                  src={tiktokIcon}
                  alt="TikTok logo"
                />
              </Link>
              <Link href="">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={pinterestIcon}
                  alt="Pinterest logo"
                />
              </Link>
              <Link href="">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={instagramIcon}
                  alt="Instagram logo"
                />
              </Link>
              <Link href="">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={youtubeIcon}
                  alt="Youtube Icon"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full border-r border-r-[#777777]"></div>
        <div className="justify-self-center w-1/2">
          <div className=" flex flex-col w-1/2 items-center justify-center m-auto">
            <Link href="/">
              <Image
                className=""
                src={prostateCancerLogo}
                alt="Prostate cancer logo"
                width="158"
                height="93"
              />
            </Link>
            <p>
              Most men with early prostate cancer don't have any syptoms. check
              your risk in 30 seconds
            </p>
            <Link href="/">
              <button>check your risk</button>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
