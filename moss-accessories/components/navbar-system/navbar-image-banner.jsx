
import Image from "next/image";

export default function NavbarImageBanner({imageBanner}) {
    console.log(imageBanner);
    

    return (
          <div
          className={` w-1/2  flex items-start!important   justify-center py-12 bg-[#5e5050]` }
        
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
                
                width={300}
                height={300 }
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