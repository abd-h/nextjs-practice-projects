import Link from "next/link";
import { shirts } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinks from "./product-navlinks";

export default function ShirtsContent() {
  return (
    <>
      {/* For larger screens */}
      <div
        className={`small_screens:hidden md_screens:hidden flex  mx-auto w-[80%]  justify-evenly`}
      ></div>

      {/* For smaller screens */}
      <div
        className={`larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly scroll-m-1  `}
      >
        <ProductNavLinks title="Formal" items={shirts.formal} />
        <ProductNavLinks title="Casual shirts" items={shirts.casual} />
        <ProductNavLinks
          title="Shirts by colour"
          items={shirts.shirts_by_colour}
        />
        <ProductNavLinks title="Fit" items={shirts.fit} />
      </div>
    </>
  );
}
