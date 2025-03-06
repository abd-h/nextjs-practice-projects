
import socksBanner from '@/assets/product-banners/green-socks-banner.jpg';
import bagsAndLuggage from "@/assets/product-banners/bags_and_luggage.webp";
import belts from "@/assets/product-banners/belts.webp";
import cufflinks from "@/assets/product-banners/cufflinks.webp";
import hatsAndCaps from "@/assets/product-banners/hats_and_caps.webp";
import pocketSq from "@/assets/product-banners/pocket_sq.jpg";
import shoes from "@/assets/product-banners/shoes_banner.webp";
import skincareAndFragrance from "@/assets/product-banners/skincare_and_fragrance.webp";

import HeroBanner from "@/components/main/hero-banner";

import ProductLinks from './products';


export default function ProductLandingPage() {

    return (
      <>
        <HeroBanner />
        <section className="flex flex-col gap-0">
          <section className="flex justify-around gap-x-8">
            <ProductLinks image={socksBanner} title={"Socks"} href="/socks" />
            <ProductLinks image={shoes} title={"shoes"} href="/shoes" />
          </section>
          <section className="flex justify-around gap-x-8">
            <ProductLinks
              image={skincareAndFragrance}
              title={"Skincare & Fragrance"}
              href="/skincare-and-fragrance"
            />
            <ProductLinks
              image={bagsAndLuggage}
              title={"Bags & Luggage"}
              href="/bags-and-luggage"
            />
          </section>
          <ProductLinks image={belts} title="belts" href="belts" />
          <section className="flex justify-around gap-x-8">
            <ProductLinks
              image={pocketSq}
              title={"Pocket squares"}
              href="/pocket-squares"
            />
            <ProductLinks
              image={hatsAndCaps}
              title={"Hats & Caps"}
              href="/hats_and_caps"
            />
            <ProductLinks
              image={cufflinks}
              title={"cufflinks"}
              href="/cufflinks"
            />
          </section>
        </section>
      </>
    );
}