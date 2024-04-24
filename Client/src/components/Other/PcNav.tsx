// Images
import Logo_1 from "../../assets/OPAL OUTINGS.png";
import { NavLink, Link } from "react-router-dom";
// ICONS
import { User } from "lucide-react";
// hooks
import { useState, useEffect } from "react";
// Outside Hooks
import OutsideClickHandler from "react-outside-click-handler";

export default function PcNav() {
  const [showingMenu, setShowingMenu] = useState<boolean>(false);
  const handleshowingmenu = () => {
    setShowingMenu(true);
  };

  const menuNames = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "MAIL US", link: "/mail" },
    { name: "BLOG", link: "/blog" },
  ];
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
  return (
    <>
      <section className="bg-primary flex items-center justify-between w-full h-full my-2 mx-2 py-2 px-4 rounded-m"></section>
      {/* <section className="bg-primary w-full flex items-center justify-between py-2 px-[150px] text-white">
        <div>
          <NavLink to={"/"}>
            <img className="w-[40px]" src={Logo_1} alt="logo" />
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
        </div>
        <section className="relative">
          <OutsideClickHandler
            onOutsideClick={() => {
              setShowingMenu(false);
            }}
          >
            <div onClick={handleshowingmenu} className="User-btn">
              <User />
            </div>
            {isUserLoggedIn ? (
              <>
                {showingMenu && (
                  <>
                    <section className="absolute top-[70px] -right-[70px]">
                      <div className="flex bg-primary shadow-lg w-[200px] h-[150px] flex-col gap-8 rounded-lg items-center justify-center">
                        <Link to={"/profile"}>
                          <span className="Active-btn">Profile</span>
                        </Link>

                        <span
                          onClick={handlelogout}
                          className="Unactive-btn cursor-pointer"
                        >
                          Sign out
                        </span>
                      </div>
                    </section>
                  </>
                )}
              </>
            ) : (
              <>
                {showingMenu && (
                  <>
                    <section className="absolute top-[70px] -right-[70px]">
                      <div className="flex bg-primary shadow-lg w-[200px] h-[150px] flex-col gap-8 rounded-lg items-center justify-center">
                        <Link to={"/signup"}>
                          <span className="Active-btn">SIGN UP</span>
                        </Link>
                        <Link to={"/signin"}>
                          <span className="Unactive-btn">SIGN IN</span>
                        </Link>
                      </div>
                    </section>
                  </>
                )}
              </>
            )}
          </OutsideClickHandler>
        </section>
      </section> */}
    </>
  );
}
