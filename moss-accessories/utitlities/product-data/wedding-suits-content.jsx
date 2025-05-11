import Link from "next/link";
import { weddings } from "../navlink-content/navbar-sublinks-data";
import ProductNavLinks from "./product-navlinks";
import ProductNavLinksLargeScreens from "./product-navlinks-large-screens";

export default function WeddingsContent() {
  return (
    <>
      {/* For larger screens */}
      {/* This is for larger screens only */}
      {/* It takes in items and title as props */}
      {/* items is an array of objects containing id, title and href */}
      {/* title is a string */}
      <div className="small_screens:hidden md_screens:hidden flex  mx-auto w-full  justify-evenly items-start">
        <ProductNavLinksLargeScreens items={ weddings.wedding_suits } title='Wedding suits' />
        <ProductNavLinksLargeScreens
          items={ weddings.complete_the_look }
          title='Complete the look'
        />
        <ProductNavLinksLargeScreens items={ weddings.editorial } title='Editorial' />
        <ProductNavLinksLargeScreens items={ weddings.services } title='Services' />
      </div>
      
       
      {/* For smaller screens */}
      {/* This is for smaller screens only */}
      {/* It takes in items and title as props */}
      {/* items is an array of objects containing id, title and href */}
      {/* title is a string */}
      <div className="larger_screens:hidden flex  flex-col mx-auto w-full  justify-evenly  ">
        <ProductNavLinks title="Wedding suits" items={weddings.wedding_suits} />
        <ProductNavLinks
          title="Complete the look"
          items={weddings.complete_the_look}
        />
        <ProductNavLinks title="Editorial" items={weddings.editorial} />
        <ProductNavLinks title="Services" items={weddings.services} />
      </div>
    </>
  );
}