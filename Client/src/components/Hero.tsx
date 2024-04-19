import BG from "../assets/Hero_Background.jpg";

export default function Hero() {
  return (
    <>
      <section className="w-full relative -z-20">
        <section className="">
          <img className="w-full " src={BG} alt="" />
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center text-center justify-center text-white">
            <div className="text-5xl font-semibold">
              <h1 className="text-lg">ONLY IN MOROCCO</h1>
              <h1 className="text-2xl font-light">LET US TAKE YOU TO YOUR</h1>
              <h1>DREAM DESTINATIONS</h1>
            </div>
            <div>
              <form className="z-20" action="">
                <input type="text" placeholder="SEARCH FOR PLACE" />
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
