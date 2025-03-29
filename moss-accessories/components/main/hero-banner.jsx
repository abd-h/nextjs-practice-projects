import Image from "next/image";
import Link from "next/link";

import heroBanner from "@/assets/hero_banner.webp";

export default function HeroBanner() {
  return (
    <div>
      <div className="hidden w-full larger_screens:block overflow-hidden mb-6 md_screens:mb-0">
        <Link href="/about">
          <section className=" relative h-[630px] w-full m-auto bg-[url(@/assets/hero_banner.webp)] larger_screens:bg-contain bg-no-repeat sm_screens:bg-contain md_screens:h-[430px] md_screens:mb-0  mb-4">
            <div className="absolute top-[30%] md_screens:top-[10%] left-[19%]">
              <h2 className="font-[900] text-white text-6xl  md_screens:text-4xl my-4">
                Ties
              </h2>

              <p className="px-8 py-4 w-40 text-center tracking-widest uppercase font-bold text-sm bg-white md_screens:px-4 md_screens:w-[8rem]">
                Shop
              </p>
            </div>
          </section>
        </Link>
      </div>
      <div className="hidden small_screens:block overflow-hidden mb-6">
        <Link href="/about">
          <section className=" relative h-[430px] w-full m-auto bg-[url(@/assets/hero_mobile-min.jpg)] bg-no-repeat ">
            <div className="absolute small_screens:top-[35%]  left-[19%] ">
              <h2 className="font-[900] text-white larger_screens:text-6xl small_screens:text-3xl my-4">
                Ties
              </h2>

              <p className="px-8 py-4 w-40 text-center tracking-widest uppercase font-bold text-sm bg-white small_screen:py-4 small_screen:w-[8rem]">
                Shop
              </p>
            </div>
          </section>
        </Link>
      </div>
      <div className="hidden md_screens:block overflow-hidden mb-6">
        <Link href="/about">
          <section className=" relative h-[430px] w-full mx-auto bg-[url(@/assets/hero_banner.webp)] bg-no-repeat bg-contain ">
            <div className="absolute md_screens:top-[35%]  left-[19%] ">
              <h2 className="font-[900] text-white larger_screens:text-6xl small_screens:text-3xl my-4">
                Ties
              </h2>

              <p className="px-8 py-4 w-40 text-center tracking-widest uppercase font-bold text-sm bg-white small_screen:py-4 small_screen:w-[8rem]">
                Shop
              </p>
            </div>
          </section>
        </Link>
      </div>
    </div>
  );
}
