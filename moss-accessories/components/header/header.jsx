

import HeaderLinks from "./header-links";
import NavLinks from "./header-navLinks";

export default function MainHeader() {
  return (
    <>
      <header className=" m-auto overflow-hidden text-center z-20 mb-4 flex flex-col  justify-between font-normal tracking-widest text-[12px] ">
        <HeaderLinks />
        <NavLinks />
      </header>
    </>
  );
}
