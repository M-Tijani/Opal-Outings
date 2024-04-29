import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main className="font-Inter">
        <section className="fixed w-full z-10">
          <Header />
        </section>
        <div className="w-full pt-[95px]">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}
