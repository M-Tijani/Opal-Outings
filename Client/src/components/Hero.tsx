// Icons
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="bg-hero-pattern w-full h-[400px] flex flex-col items-center justify-center gap-5 lg:h-[600px]">
        <div className="text-center font-bold text-white flex flex-col gap-1 ">
          <h1 className="text-lg">ONLY IN MOROCCO</h1>
          <h1 className="text-xl font-normal lg:text-2xl">
            LET US TAKE YOU TO YOUR
          </h1>
          <h1 className="text-3xl lg:text-5xl">DREAM DESTINATIONS</h1>
        </div>
        <section className="w-full flex justify-center">
          <div className="relative w-full max-w-[350px] md:max-w-[550px] lg:max-w-[700px]">
            <input
              className="input-Search"
              type="text"
              placeholder="SEARCH FOR PLACE"
            />
            <div className="absolute top-[11px] left-[11px]">
              <Search />
            </div>
            <div className="absolute top-[4px] right-[5px] py-2 px-10 bg-tertiary hover:bg-tertiaryS duration-200 text-white rounded-md cursor-pointer font-semibold">
              FIND
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
