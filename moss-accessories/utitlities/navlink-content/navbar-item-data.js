 
 import {
  CustomMadeContent,
  ShirtsContent,
  ShoesAndAccessoriesContent,
  TrousersContent,
  
} from "@/utitlities/navlink-content/product-content";
import SuitsContent from "../product-data/suit-content";

import WeddingsContent from "../product-data/wedding-suits-content";

 export const navItems = [
   { id: "suits", title: "Suits", content: <SuitsContent /> },
   { id: "weddings", title: "Weddings", content: <WeddingsContent /> },
   { id: "shirts", title: "Shirts", content: ShirtsContent() },
   { id: "trousers", title: "Trousers", content: TrousersContent() },
   {
     id: "shoes_and_accessories",
     title: "Shoes & accessories",
     content: ShoesAndAccessoriesContent(),
   },
   { id: "custom_made", title: "Custom Made", content: CustomMadeContent() },
 ];