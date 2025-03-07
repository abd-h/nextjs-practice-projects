import Image from "next/image"
import Link from "next/link";

import heroBanner from '@/assets/hero_banner.webp';

export default function HeroBanner() {
    return (
      <div className="h-[530px] overflow-hidden mb-6">
        <Link href="/about">
          <section className=" relative h-[630px] w-full m-auto bg-[url(@/assets/hero_banner.webp)] bg-contain bg-no-repeat ">
            <div className="absolute top-[30%] left-[19%]">
              <h2 className="font-[900] text-white text-6xl my-4">Ties</h2>

              <p className="px-8 py-4 w-40 text-center tracking-widest uppercase font-bold text-sm bg-white">
                Shop
              </p>
            </div>
          </section>
        </Link>
      </div>
    );
}