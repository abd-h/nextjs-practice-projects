 
//  import {
//   CustomMadeContent,
//   // ShoesAndAccessoriesContent,
  
  
// } from "@/utitlities/navlink-content/product-content";
import SuitsContent from "../product-data/suit-content";

import WeddingsContent from "../product-data/wedding-suits-content";

import ShirtsContent from "../product-data/shirt-content";

import TrousersContent from "../product-data/trounsers-content";
import ShoesAndAccessoriesContent from "../product-data/shoes-and-accessories";

import CustomMadeContent from "../product-data/custome_made_content";

export const navItems = [
   { id: "suits", title: "Suits", content: <SuitsContent />, href:'#' },
   { id: "weddings", title: "Weddings", content: <WeddingsContent />, href:'/weddings' },
   { id: "shirts", title: "Shirts", content: <ShirtsContent />, href:'/shirts' },
   { id: "trousers", title: "Trousers", content: <TrousersContent />, href:'/trousers' }, 
   {
     id: "shoes_and_accessories",
     title: "Shoes & accessories",
     content: <ShoesAndAccessoriesContent />,
     href:'/shoes-and-accessories'
   },
   { id: "custom_made", title: "Custom Made", content: <CustomMadeContent />, href:'/custom-made' },
 ];