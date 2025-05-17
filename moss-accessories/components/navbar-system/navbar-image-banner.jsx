
import Image from "next/image";

export default function NavbarImageBanner({imageBanner}) {
    console.log(imageBanner.length === 1);
    

    return (
          <div
          className={`${imageBanner.length === 1? 'w-[30%]' : 'w-1/2'}  flex items-start!important   justify-center py-12 bg-[#666262]` }
        
        >
      <ul className="w-full flex items-center justify-around m-auto p-4">
        {imageBanner.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center justify-center gap-2"
          >
            <figure>
              <Image
                src={item.image}
                alt={item.figcaption}
                className={`h-[200px] w-[200px]`}
              />
              <figcaption className="text-sm font-semibold text-white text-left p-2">
                {item.figcaption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
        </ div>
    );
 }