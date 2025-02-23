export default function MainHeader() {
  return (
    <>
      <header className="flex w-full h-8  justify-between items-center font-normal tracking-widest text-[12px] border-b-[1px] border-b-black-400 ">
        <ul className="flex gap-8 items-center">
          <li className=" border-r-[1px] h-full p-2 text-center">Moss</li>
          <li className=" border-r-[1px] h-full p-2 text-center">
            Moss Box Subscription
          </li>
          <li className=" border-r-[1px] h-full p-2 text-center">Gift Cards</li>
        </ul>
        <ul className="flex gap-8  w-[40%]">
          <li className=" w-full border-r-[1px]  p-2 text-center">
            Book Store Appoinment
          </li>
        </ul>
        <ul className="flex gap-8 items-center">
          <li className="border-r-[1px]  p-2 text-center">Editorial</li>
          <li className="border-r-[1px]  p-2 text-center">Find a Store</li>
          <li className="mr-8">GP £</li>
        </ul>
      </header>
    </>
  );
}
