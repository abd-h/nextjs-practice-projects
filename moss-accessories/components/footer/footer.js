import Image from "next/image";
import Link from "next/link";

import facebookIcon from "@/assets/facebook.png";
import tiktokIcon from "@/assets/tiktok.png";
import youtubeIcon from "@/assets/youtube_icon.png";
import instagramIcon from "@/assets/instagram_icon.png";
import pinterestIcon from "@/assets/pinterest_icon.png";
import prostateCancerLogo from "@/assets/prostatecancerlogo.webp";
import FooterNavLinks from "./footer-navLinks";

export default function Footer() {
  return (
    <footer className="w-full bg-[#28252a] text-white">
      <FooterNavLinks />
      {/** Social media links */}
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
              <Link className="hover:animate-bounce" href="">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={facebookIcon}
                  alt="Facebook logo"
                />
              </Link>
              <Link href="" className="hover:animate-bounce">
                <Image
                  className="w-[20px] rounded-full overflow-hidden "
                  src={tiktokIcon}
                  alt="TikTok logo"
                />
              </Link>
              <Link href="" className="hover:animate-bounce">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={pinterestIcon}
                  alt="Pinterest logo"
                />
              </Link>
              <Link href="" className="hover:animate-bounce">
                <Image
                  className="w-[24px] rounded-full overflow-hidden "
                  src={instagramIcon}
                  alt="Instagram logo"
                />
              </Link>
              <Link href="" className="hover:animate-bounce">
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
          <div className=" flex flex-col w-1/2 items-start justify-start m-auto">
            <Link href="/">
              <Image
                className=""
                src={prostateCancerLogo}
                alt="Prostate cancer logo"
                width="158"
                height="83"
              />
            </Link>
            <p className="text-[0.85rem] tracking-wider leading-7">
              Most men with early prostate cancer don't have any syptoms. check
              your risk in 30 seconds
            </p>
            <Link className="my-4" href="/">
              <button className="text-sm font-bold first-letter:uppercase underline ws-wide tracking-widest">
                check your risk
              </button>
            </Link>
          </div>
        </div>
      </section>
      <p className="py-4 text-center mb-[1px] text-xs tracking-wider">
        &copy; 2025 Moss Limited. All rights reserved. Registration
        No.7945643281
      </p>
    </footer>
  );
}
