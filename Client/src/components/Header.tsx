import MobileNav from "./Other/MobileNav";
import PcNav from "./Other/PcNav";

export default function Header() {
  return (
    <>
      <section className="hidden md:flex">
        <PcNav />
      </section>
      <section className="flex md:hidden">
        <MobileNav />
      </section>
    </>
  );
}
