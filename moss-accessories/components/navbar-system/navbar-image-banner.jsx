
import Image from "next/image";
import Link from "next/link";

export default function NavbarImageBanner({imageBanner}) {
    console.log(imageBanner.length === 1);
    

    return (
      <div
        className={`${
          imageBanner.length === 1 ? "w-[30%]" : "w-1/2"
        }  flex items-start!important   justify-center py-12 bg-[#666262]`}
      >
        <ul className="w-full flex items-center justify-around m-auto p-4">
          {imageBanner.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-center gap-2"
            >
              <figure>
                <Link href="#" className="group relative">
                  <Image
                    src={item.image}
                    alt={item.figcaption}
                    className={`h-[200px] w-[200px]`}
                  />
                </Link>
                <figcaption className=" text-sm font-semibold text-white text-left p-2 mb-8">
                  <Link href="#" className="group relative">
                    {" "}
                    {item.figcaption}
                    <span className="mt-[2px] absolute left-1/2 bottom-0 w-0 h-[0.5px] bg-[#ffffff] transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 top-[1rem]"></span>
                  </Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    );
 }