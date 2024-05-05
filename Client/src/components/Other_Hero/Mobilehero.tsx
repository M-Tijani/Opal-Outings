// Icons
import { Search } from "lucide-react";
import { Youtube } from "lucide-react";
// image
import img from "../../assets/123.jpg";

export default function Mobilehero() {
  return (
    <>
      <section className="relative w-full h-full">
        <section className="relative w-full h-full max-w-[350px] mx-auto">
          <div className="absolute top-0 gap-4 left-0 w-full h-full max-w-[350px] mx-auto flex flex-col items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">
              Enjoy Your Dream Vacation
            </h1>
            <a
              className="text-white flex items-center justify-center gap-2 bg-secondary py-2 px-2 rounded-lg hover:bg-secondaryHover duration-200"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="new"
            >
              <Youtube />
              <button>Click Here</button>
            </a>
          </div>
          <img className="w-full rounded-lg " src={img} alt="" />
        </section>
        <section className="w-full absolute -bottom-12 left-0 mx-auto flex justify-center">
          <div>
            <div className="w-full max-w-[300px] rounded-md bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-3 px-4">
              <h1 className="pl-1 font-semibold ">Search</h1>
              <div className="relative">
                <Search size={22} className="absolute top-2 left-2" />
                <input
                  className="w-full py-2 bg-inputcolor rounded-md outline-none px-9"
                  type="text"
                  placeholder="Many places to visit"
                />
                <div className="absolute right-1  top-1">
                  <button className="bg-btncolor hover:bg-sidecolor duration-200 px-4 py-1 text-white rounded-md">
                    Find
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
