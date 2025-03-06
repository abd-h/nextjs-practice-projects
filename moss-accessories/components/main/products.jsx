import Image from "next/image";
import Link from "next/link";

export default function ProductLinks({ image, title, href }) {
  return (
    <section className='mb-8 capitalize w-full'>
      <Link href={href}>
        <Image src={image} className='w-[120%]' alt={title} />
      </Link>
      <h2 className='font-bold tracking-wide mt-4 mb-2 text-2xl'>{title}</h2>
      <Link href={href}>
        <p className='underline text-sm/8 font-[500]'>shop</p>
      </Link>
    </section>
  );
}
