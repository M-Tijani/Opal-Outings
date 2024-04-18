import Logo from "../assets/main-logo.png";

import { NavLink } from "react-router-dom";

// ICONS
import { User } from "lucide-react";
// hooks
import { useState } from "react";
export default function Header() {
  const handleshowingmenu = () => {
    console.log("showing menu");
  };

  const menuNames = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "MAIL US", link: "/mail" },
    { name: "BLOG", link: "/blog" },
  ];

  return (
    <>
      <section className="relative bg-primary text-white flex items-center justify-between py-3 px-[250px]">
        <div>
          <NavLink to={"/"}>
            <img className="w-[180px]" src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="flex items-center justify-center gap-4 font-semibold">
          {menuNames.map((item, index) => (
            <NavLink
              to={`${item.link}`}
              key={index}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {item.name}
            </NavLink>
          ))}
          <span className="absolute h-1 w-10 flex bg-tertiaryS"></span>
        </div>
        <div onClick={handleshowingmenu} className="User-btn">
          <User />
        </div>
      </section>
    </>
  );
}
