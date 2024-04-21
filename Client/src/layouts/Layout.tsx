import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main>
        <section className="fixed w-full z-10">
          <Header />
        </section>
        <div>
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
}
