``;
import HeaderLinks from "./header-links";
import NavLinks from "./navLinks";

export default function MainHeader() {
  return (
    <>
      <header className="relative m-auto overflow-hidden text-center z-20 mb-4 flex flex-col  justify-between font-normal tracking-widest text-[12px] ">
        <HeaderLinks />
        <NavLinks />
      </header>
    </>
  );
}
