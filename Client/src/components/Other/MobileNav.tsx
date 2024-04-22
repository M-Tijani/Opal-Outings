// Images
import Logo from "../../assets/main-logo.png";
// routes
import { NavLink, Link } from "react-router-dom";
// Icons
import { Menu } from "lucide-react";
import { X } from "lucide-react";
// Outside Hooks
import OutsideClickHandler from "react-outside-click-handler";
// States
import { useState, useEffect } from "react";
export default function MobileNav() {
  const [showingMenu, setShowingMenu] = useState<boolean>(false);
  const handleshowingmenu = () => {
    setShowingMenu((prev) => !prev);
  };
  // Arry of menu names
  const menuNames = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "MAIL US", link: "/mail" },
    { name: "BLOG", link: "/blog" },
  ];
  const signinup = [
    { name: "SIGN IN", link: "/signin" },
    { name: "SIGN UP", link: "/signup" },
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
      <section className="bg-primary flex items-center justify-between w-full py-2 px-4 text-white z-20 shadow-lg">
        <Link to={"/"}>
          <img className="w-[200px]" src={Logo} alt="" />
        </Link>
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
              <section className="absolute top-[60px] right-0 w-full max-w-[300px] h-screen bg-primary z-10">
                <div className="my-[80px] flex flex-col items-center justify-center gap-4 text-center">
                  {menuNames.map((item, index) => (
                    <NavLink
                      to={`${item.link}`}
                      key={index}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeS" : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <section className="flex flex-col items-center justify-center gap-4 ">
                  {isUserLoggedIn ? (
                    <section className="w-full flex flex-col items-center justify-center gap-4">
                      <button className="input-btn" onClick={handleredirect}>
                        Profile
                      </button>
                      <button className="input-btn" onClick={handlelogout}>
                        Sign out
                      </button>
                    </section>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 ">
                      {signinup.map((item, index) => (
                        <Link
                          className="input-btn"
                          to={`${item.link}`}
                          key={index}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </section>

                <div
                  onClick={() => setShowingMenu(false)}
                  className="absolute top-[20px] left-[30px] border-none ring-[4px] ring-tertiary rounded-lg py-1 px-1"
                >
                  <X size={30} />
                </div>
              </section>
            </>
          )}
        </OutsideClickHandler>
      </section>
    </>
  );
}
