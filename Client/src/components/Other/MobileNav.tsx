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
// animation
import { motion, AnimatePresence } from "framer-motion";
import Avatarinput from "../Props/Avatarinput";
import axios from "axios";
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
    handleredirect();
  };
  const handleredirect = () => {
    if (isUserLoggedIn) {
      window.location.href = "/profile";
    } else {
      window.location.href = "/";
    }
  };
  // Profile Avatar Image
  const [avatarName, setAvatarName] = useState<string>("Null");
  const [avatarEmail, setAvatarEmail] = useState<string>("null@expsamle.com");
  const [avatarImage, setAvatarImage] = useState<string>("");

  useEffect(() => {
    fetchUserData();
  }, [avatarName]);
  const fetchUserData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/profile",
        {},
        {
          headers: {
            Authorization: Authorization,
          },
        }
      );
      setAvatarName(response.data.user.name);
      setAvatarEmail(response.data.user.email);
      setAvatarImage(avatarName[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setAvatarImage(avatarName[0]);
  }, []);
  // Get Profile Data
  const Authorization = document.cookie
    .split(";")
    .find((row) => row.startsWith("Authorization="))
    ?.split("=")[1];
  // Sign in array
  const account = [
    { name: "Orders", link: "/orders" },
    { name: "Billing", link: "/billing" },
    { name: "Profile", link: "/profile" },
  ];
  const support = [{ name: "Center Help", link: "/mail" }];
  return (
    <>
      <section className="relative bg-primary flex items-center justify-between w-full h-full my-2 mx-2 py-2 px-4 rounded-md">
        <Link to={"/"}>
          <img className="w-[180px]" src={Logo} alt="" />
        </Link>
        <section className="flex items-center justify-center gap-4">
          <OutsideClickHandler onOutsideClick={() => setShowingProfile(false)}>
            <div id="profileanimation" onClick={handleshowingprofile}>
              <UserRound size={30} />
            </div>

            {isUserLoggedIn ? (
              <>
                <AnimatePresence>
                  {showingProfile && (
                    <motion.section
                      initial={{ x: 200 }}
                      transition={{ duration: 0.1 }}
                      animate={{ x: 0 }}
                      exit={{ x: 200 }}
                      className="absolute duration-200 top-[80px] right-0 w-full max-w-[300px] h-[450px] flex flex-col rounded-md bg-tertiary "
                    >
                      <section className="w-full flex flex-col gap-2">
                        <Avatarinput
                          name={avatarName}
                          firstletter={avatarImage}
                          email={avatarEmail}
                        />
                        <span className="w-full h-[2px] rounded-md max-w-[230px] mx-auto bg-primary"></span>
                        <section className="w-full text-center flex flex-col gap-4 mx-auto mt-8 text-white">
                          {account.map((item, index) => {
                            return (
                              <NavLink
                                to={`${item.link}`}
                                key={index}
                                className={({ isActive, isPending }) =>
                                  isPending
                                    ? "pending"
                                    : isActive
                                    ? "profile_menu_active"
                                    : "profile_menu_padding"
                                }
                              >
                                {item.name}
                              </NavLink>
                            );
                          })}
                        </section>
                        <span className="absolute top-[95px] left-[40px] text-white">
                          Account
                        </span>
                        <span className="w-full h-[2px] rounded-md max-w-[230px] mx-auto bg-primary mt-4"></span>
                        <section className="w-full text-center flex flex-col gap-4 mx-auto mt-10 text-white">
                          {support.map((item, index) => {
                            return (
                              <NavLink
                                to={`${item.link}`}
                                key={index}
                                className={({ isActive, isPending }) =>
                                  isPending
                                    ? "pending"
                                    : isActive
                                    ? "profile_menu_active"
                                    : "profile_menu_padding"
                                }
                              >
                                {item.name}
                              </NavLink>
                            );
                          })}
                          <button
                            onClick={handlelogout}
                            className="profile_menu_active"
                          >
                            Sign out
                          </button>
                        </section>
                        <span className="absolute top-[305px] left-[40px] text-white">
                          Support
                        </span>
                      </section>
                    </motion.section>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <>
                <AnimatePresence>
                  {showingProfile && (
                    <>
                      <motion.section
                        initial={{ x: 200 }}
                        transition={{ duration: 0.1 }}
                        animate={{ x: 0 }}
                        exit={{ x: 200 }}
                        className="absolute duration-200 top-[80px] right-0 w-full max-w-[300px] h-[250px] flex flex-col rounded-md bg-tertiary "
                      >
                        <section className="w-full flex flex-col gap-2">
                          <Avatarinput
                            name={avatarName}
                            firstletter={avatarImage}
                            email={avatarEmail}
                          />
                          <span className="w-full h-[2px] rounded-md max-w-[230px] mx-auto bg-primary"></span>
                          <section className="w-full text-center flex flex-col gap-4 mx-auto mt-5 text-white">
                            {signinup.map((item, index) => (
                              <NavLink
                                to={`${item.link}`}
                                key={index}
                                className={({ isActive, isPending }) =>
                                  isPending
                                    ? "pending"
                                    : isActive
                                    ? "profile_menu_active"
                                    : "profile_menu_padding"
                                }
                              >
                                {item.name}
                              </NavLink>
                            ))}
                          </section>
                        </section>
                      </motion.section>
                    </>
                  )}
                </AnimatePresence>
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
            <AnimatePresence>
              {showingMenu && (
                <>
                  <section className="">
                    <motion.div
                      initial={{ x: 200 }}
                      transition={{ duration: 0.1 }}
                      animate={{ x: 0 }}
                      exit={{ x: 200 }}
                      className="Boxholderformenu"
                    >
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
                    </motion.div>
                  </section>
                </>
              )}
            </AnimatePresence>
          </OutsideClickHandler>
        </section>
      </section>
    </>
  );
}
