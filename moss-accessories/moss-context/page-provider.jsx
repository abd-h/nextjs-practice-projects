"use client";
import { FilteredItemsProvider } from "./filtered-items-context";
import { MobileMenueProvider } from "./navbar-context";

export default function FilteredPageProvider({ children }) {
  return (
    <FilteredItemsProvider>
      <MobileMenueProvider>{children}</MobileMenueProvider>
    </FilteredItemsProvider>
  );
}
