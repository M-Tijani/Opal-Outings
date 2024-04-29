// // Icons
// import { Search } from "lucide-react";
export default function Hero() {
  return (
    <>
      <section className="relative bg-[url('./src/assets/useble_image.jpg')] bg-cover bg-center flex flex-col items-center justify-center w-full max-w-[355px] mx-auto h-[200px] rounded-md">
        <h1 className="text-2xl font-bold text-tertiary">
          Enjoy Your Dream Vacation
        </h1>
        <div className="absolute w-full h-full top-0 left-0 opacity-30 ring-[2px] ring-tertiary rounded-md -z-20"></div>
      </section>
      {/* <section className="relative w-full">
        <section className="relative w-full max-w-[355px] mx-auto shadow-md">
          <div className="absolute w-full h-full top-0 left-0 rounded-md bg-gradient-to-r from-primary from-40% opacity-90"></div>
          <img className="w-full rounded-md -z-10" src={img} alt="" />
          <div className="absolute w-full h-full top-0 left-0 opacity-30 ring-[2px] ring-tertiary rounded-md -z-20"></div>
        </section>
        <section className="absolute top-2 left-[25px]">
          <h1 className="text-2xl font-semibold">Enjoy Your Dream Vacation</h1>
        </section>
      </section> */}
    </>
  );
}
