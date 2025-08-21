import FilterCategory from "./filter-categories";

export default function FilterSidebar({ isOpen, onClose }) {
  // Example filter options - in a real app, these might com from props or an API
  const filterCategories = [
    {
      id: "brand",
      name: "Brand",
      options: [
        "Moss",
        "Ted Baker",
        "French Connection",
        "Hugo Boss",
        "Reiss",
        "AllSaints",
      ],
    },
    {
      id: "colour",
      name: "Colour",
      options: [
        "Black",
        "Blue",
        "Beige",
        "Brown",
        "Green",
        "Grey",
        "Navy",
        "White",
      ],
    },
    {
      id: "design",
      name: "Design",
      options: ["Plain", "Patterned", "Checked", "Striped"],
    },
    {
      id: "fabric",
      name: "Fabric",
      options: ["Wool", "Cotton", "Linen", "Polyester", "Silk"],
    },
  ];

  return (
    <div
      className={`fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">All Filters</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {/** Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
          </div>
          <div className="p-4">
              {
                  filterCategories.map((category) => <FilterCategory key={ category.id } name={ category.name } options={category.options} /> )
          }
          </div>
    </div>
  );
}
