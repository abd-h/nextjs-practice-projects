const dummyFilters = [
  { id: 1, title: "All filters" },
  { id: 2, title: "Brand" },
  { id: 3, title: "Colour" },
  { id: 4, title: "Design" },
  { id: 5, title: "Fabric" },
];

export default function FilterButton({ onClick }) {
  return (
    <>
      <nav className="w-[100%] bg-white p-6 my-4 border-2 border-gray-200 ">
        <ul className="flex gap-8">
          {dummyFilters.map((filter) => (
              <li onClick={ onClick } key={ filter.id }
              className='cursor-pointer'>
              {filter.title}{" "}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
