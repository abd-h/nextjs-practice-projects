'use client'
import { createContext, useContext, useState } from "react";

export const FilteredItemsContext = createContext();

export function FilteredItemsProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState([]);

  const [isExpandedItemId, setIsExpandedItemId] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterId = (filter) => {
    // This function handles the filter ID when a filter is clicked
    setActiveFilter(
      activeFilter.map((item) =>
        item.id === filter.id ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );
    setIsExpandedItemId((prev) => (prev === filter.id ? null : filter.id));
  };

  const filteredItemsContextValue = {
    isOpen,
    toggleSidebar,
    handleFilterId,
    isExpandedItemId,
    setIsExpandedItemId,
    activeFilter,
    setActiveFilter,
  };
    
  return (
    <FilteredItemsContext.Provider value={filteredItemsContextValue}>
      {children}
    </FilteredItemsContext.Provider>
  );
}


export function useFilteredItemsContext() {
  const context = useContext(FilteredItemsContext);
  if (!context) {
    throw new Error(
      "useFilteredItemsContext must be used within a FilteredItemsProvider"
    );
  }
  return context;
}