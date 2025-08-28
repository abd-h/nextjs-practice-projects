import Image from "next/image";
import Link from "next/link";

import facebookIcon from "@/assets/facebook.png";
import tiktokIcon from "@/assets/tiktok.png";
import youtubeIcon from "@/assets/youtube_icon.png";
import instagramIcon from "@/assets/instagram_icon.png";
import pinterestIcon from "@/assets/pinterest_icon.png";
import prostateCancerLogo from "@/assets/prostatecancerlogo.webp";
import FooterNavLinks from "./footer-navLinks";
import FooterEditorialCarousel from "./footer-editorial-carousel";

export default function Footer() {
  return (
    <footer className="w-full bg-[#28252a] text-white">
      {/** Footer editorial carousel */}
      <FooterEditorialCarousel />
      <FooterNavLinks />
      {/** Social media links */}
      <section className=" small_screens:my-4 small_screens:flex-col small_screens:gap-4  border-y border-y-[#777777] mt-12 flex items-center justify-center  relative ">
        <div className=" small_screens:w-full w-1/2 justify-center small_screens:py-8">
          {" "}
          <form className="">
            <p className="py-4 flex flex-col w-[70%] m-auto relative">
              <label className="text-sm tracking-wider py-4" htmlFor="email">
                Signup today to get the latest news and be the first to hear
                about our exclusive offers
              </label>
              <input
                className="pl-0 bg-[#28252a] border-b border-b-[white] bottom-0 focus:outline-none active border-t-0 border-x-0 focus:border-b focus:border-b-[white] text-xl focus:ring-0 placeholder:-ml-4 placeholder:text-xl placeholder:tracking-wider"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                required
              />
              <button
                className="absolute bottom-6 right-1 font-bold tracking-wider"
                type="submit"
              >
                Submit
              </button>
            </p>
          </form>
          <div className="w-1/2 relative flex small_screens:w-full justify-center gap-2">
            <div
              className=" flex justify-start ml-[-10px] small_screens:absolute small_screens:left-[30%]
              small_screens:mb-2
              small_screens:my-0 my-4  items-center gap-2
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
        <div className="h-full border-r border-r-[#777777] small_screens:border-b small_screens:border-b-[#777777]  small_screens:w-full small_screens:my-4"></div>
        <div className=" flex small_screens:w-full  justify-self-center border-l border-l-[#777777] w-1/2 h-[400px]">
          <div className=" flex flex-col w-1/2 items-center justify-start m-auto  small_screens:mx-auto small_screens:justify-center  small_screens:my-4">
            <Link href="/" className=" self-start">
              <Image
                className="max-h-[auto] w-[158px] h-[83px]"
                src={prostateCancerLogo}
                alt="Prostate cancer logo"
              />
            </Link>
            <p className="text-[0.85rem] tracking-wider leading-7 self-start">
              Most men with early prostate cancer don't have any syptoms. check
              your risk in 30 seconds
            </p>
            <Link className="self-start my-4 text-left" href="/">
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
