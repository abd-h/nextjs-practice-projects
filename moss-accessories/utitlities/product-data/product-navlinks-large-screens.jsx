import Link from "next/link";

export default function ProductNavLinksLargeScreens({items, title}) {
    // This component is for larger screens only
    // It takes in items and title as props
    // items is an array of objects containing id, title and href
    // title is a string
    return (
      <>
      
          <ul className="space-y-3 mb-4 flex-col text-left cursor-pointer">
            <h3 className="text-sm font-semibold mb-4 ">{title}</h3>
            {items.map((item) => (
              <li  key={item.id}>
                <div className="group inline-block relative ">
                  <Link href={item.href} className="group relative">
                    {item.title}
                    <span className="absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#393939] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        
      </>
    );
}