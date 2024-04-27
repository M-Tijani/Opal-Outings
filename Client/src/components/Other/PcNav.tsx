// Images
import Logo_1 from "../../assets/OO_Main.png";
import Profile from "../../assets/Profile.png";
// routes
import { NavLink, Link } from "react-router-dom";
// hooks
import { useState, useEffect } from "react";
// Outside Hooks
import OutsideClickHandler from "react-outside-click-handler";
// animation
import { AnimatePresence, motion } from "framer-motion";
// Props
import Avatarinput from "../Props/Avatarinput";
import axios from "axios";

export default function PcNav() {
  const [showingMenu, setShowingMenu] = useState<boolean>(false);
  const handleshowingmenu = () => {
    setShowingMenu((priv) => !priv);
  };

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
  // Profile Avatar Image
  const [avatarName, setAvatarName] = useState<string>("Not Registered");
  const [avatarEmail, setAvatarEmail] = useState<string>("null@null.com");
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
  const Authorization = document.cookie
    .split(";")
    .find((row) => row.startsWith("Authorization="))
    ?.split("=")[1];

  const account = [
    { name: "Orders", link: "/orders" },
    { name: "Billing", link: "/billing" },
    { name: "Profile", link: "/profile" },
  ];
  const support = [{ name: "Center Help", link: "/mail" }];
  return (
    <>
      <section className="bg-primary w-full h-full max-w-[720px] mx-auto my-4  py-2 px-6 rounded-m">
        <section className="w-full flex items-center justify-between">
          <Link to={"/"}>
            <img className="w-[40px]" src={Logo_1} alt="" />
          </Link>
          <div className="w-full flex justify-end items-center gap-6">
            <section className="flex items-center justify-center gap-4 font-medium">
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
            </section>
            <OutsideClickHandler onOutsideClick={() => setShowingMenu(false)}>
              <span className="">
                <img
                  className="w-[50px] rounded-full border-none ring-1 hover:ring-2 ring-tertiary duration-200 ease-in-out"
                  src={Profile}
                  onClick={handleshowingmenu}
                  alt=""
                />
              </span>
              {isUserLoggedIn ? (
                <>
                  <AnimatePresence>
                    {showingMenu && (
                      <>
                        <motion.section
                          initial={{ x: 300 }}
                          animate={{ x: 0 }}
                          exit={{ x: 300 }}
                          className="absolute top-[100px] right-[20px] w-full max-w-[250px] h-[430px] flex flex-col rounded-md bg-tertiary "
                        >
                          <section className="w-full flex flex-col gap-2">
                            <Avatarinput
                              name={avatarName}
                              firstletter={avatarImage}
                              email={avatarEmail}
                            />
                            <span className="w-full h-[2px] rounded-md max-w-[230px] mx-auto bg-primary"></span>
                            <section className="w-full text-center flex flex-col gap-4 mx-auto mt-9 text-white">
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
                              <span className="absolute top-[95px] left-[40px] text-white">
                                Account
                              </span>
                            </section>
                            <span className="w-full h-[2px] rounded-md max-w-[230px] mx-auto bg-primary mt-2"></span>
                            <section className="w-full text-center flex flex-col gap-4 mx-auto mt-9 text-white">
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
                              <span className="absolute top-[300px] left-[40px] text-white">
                                Support
                              </span>
                              <button
                                onClick={handlelogout}
                                className="profile_menu_active"
                              >
                                Sign out
                              </button>
                            </section>
                          </section>
                        </motion.section>
                      </>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <>
                  <AnimatePresence>
                    {showingMenu && (
                      <>
                        <motion.section
                          initial={{ y: -100 }}
                          animate={{ y: 0 }}
                          exit={{ y: -325 }}
                          className="absolute top-[90px] right-[8px] w-full max-w-[250px] h-[230px] flex flex-col rounded-md bg-tertiary "
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
          </div>
        </section>
      </section>
    </>
  );
}
