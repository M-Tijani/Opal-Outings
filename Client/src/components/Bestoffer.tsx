// Images
import img1 from "../assets/ImageTemplate_1.png";
// Props
import Pricingcard from "./Props/Pricingcard";

export default function Bestoffer() {
  return (
    <>
      <section className="pt-[10px] md:pt-[20px] w-full h-full mx-auto flex flex-col items-center justify-center gap-4">
        <div className="text-center text-4xl font-extrabold">
          <h1>BEST OFFERS</h1>
          <h1 className="text-xl font-medium">CHECK OUT OUR TOP RATED TOURS</h1>
        </div>
        <section className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 md:w-fit lg:grid-cols-3 place-items-center gap-4">
          <Pricingcard image={img1} title="Casablanca" price="300Dhs" />
          <Pricingcard image={img1} title="Rabat" price="300Dhs" />
          <Pricingcard image={img1} title="Fes" price="300Dhs" />
          <Pricingcard image={img1} title="Marrakech" price="300Dhs" />
        </section>
      </section>
    </>
  );
}
