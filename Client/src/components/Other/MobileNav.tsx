// Images
import Logo from "../../assets/OO_Main_T.png";
// routes
import { NavLink, Link } from "react-router-dom";
// Icons
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { UserRound } from "lucide-react";
// Outside Hooks
import OutsideClickHandler from "react-outside-click-handler";
// States
import { useState, useEffect } from "react";
export default function MobileNav() {
  const [showingMenu, setShowingMenu] = useState<boolean>(false);
  const [showingProfile, setShowingProfile] = useState<boolean>(false);
  const handleshowingmenu = () => {
    setShowingMenu((prev) => !prev);
  };
  const handleshowingprofile = () => {
    setShowingProfile((prev) => !prev);
  };
  // Arry of menu names
  const menuNames = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Mail us", link: "/mail" },
    { name: "Blog", link: "/blog" },
  ];
  const signinup = [
    { name: "Sign in", link: "/signin" },
    { name: "Sign up", link: "/signup" },
  ];
  // Check if user is logged in
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn]);
  // Signout
  const handlelogout = () => {
    // Clear Cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setIsUserLoggedIn(false);
    window.location.href = "/";
  };
  const handleredirect = () => {
    if (isUserLoggedIn) {
      window.location.href = "/profile";
    } else {
      window.location.href = "/Signin";
    }
  };
  return (
    <>
      <section></section>
      <section className="relative bg-primary flex items-center justify-between w-full h-full my-2 mx-2 py-2 px-4 rounded-md">
        <Link to={"/"}>
          <img className="w-[180px]" src={Logo} alt="" />
        </Link>
        <section className="flex items-center justify-center gap-4">
          <OutsideClickHandler onOutsideClick={() => setShowingProfile(false)}>
            <div onClick={handleshowingprofile}>
              <UserRound size={30} />
            </div>
            {showingProfile && (
              <>
                <section>
                  {showingProfile && (
                    <div className="Boxholderformenu">
                      <div className="BoxholderformenuChild">
                        {signinup.map((item, index) => (
                          <NavLink
                            to={`${item.link}`}
                            key={index}
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "activeMobile"
                                : ""
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                      <div className="absolute top-7 left-7">
                        <X size={30} onClick={handleshowingprofile} />
                      </div>
                    </div>
                  )}
                </section>
              </>
            )}
          </OutsideClickHandler>
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowingMenu(false);
            }}
          >
            <div onClick={handleshowingmenu}>
              <Menu size={30} />
            </div>
            {showingMenu && (
              <>
                <section className="">
                  <div className="Boxholderformenu">
                    <div className="BoxholderformenuChild">
                      {menuNames.map((item, index) => (
                        <NavLink
                          to={`${item.link}`}
                          key={index}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "activeMobile"
                              : ""
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>

                    <div className="absolute top-7 left-7">
                      <X size={30} onClick={handleshowingmenu} />
                    </div>
                  </div>
                </section>
              </>
            )}
          </OutsideClickHandler>
        </section>
      </section>
    </>
  );
}
