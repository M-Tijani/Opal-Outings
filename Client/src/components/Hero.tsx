import Mobilehero from "./Other_Hero/Mobilehero";
import Pchero from "./Other_Hero/Pchero";

export default function Hero() {
  return (
    <>
      <section>
        <div className="flex md:hidden">
          <Mobilehero />
        </div>
        <div className="hidden md:flex">
          <Pchero />
        </div>
      </section>
    </>
  );
}
