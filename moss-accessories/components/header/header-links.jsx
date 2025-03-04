

export default function HeaderLinks() {

    return (
      <ul className="mb-0 ps-0 flex items-center justify-evenly w-full border-b-[1px] border-b-black-400">
        <li className=" border-r-[1px] p-2 text-center">Moss</li>
        <li className=" border-r-[1px] p-2 text-center">
          Moss Box Subscription
        </li>
        <li className=" border-r-[1px] p-2 text-center">Gift Cards</li>
        <li className="w-[30%]">
          <ul className="flex mb-0 ps-0  ">
            <li className=" w-full  ">Book Store Appoinment</li>
          </ul>
        </li>
        <li className=" border-l-[1px] w-[30%]">
          <ul className="mb-0 ps-0 flex justify-evenly w-full items-center relative  my-0">
            <li className="  right-1/2 ">Editorial</li>
            <li className="border-l-[1px] py-2 px-8 ml-12 text-center">
              Find a Store
            </li>
            <li className=" border-l-[1px] py-2 px-8 ">GP £ ▼</li>
          </ul>
        </li>
      </ul>
    );
}