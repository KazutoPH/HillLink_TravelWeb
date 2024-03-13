import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../contants/index";
import Button from "./Button";
import { AnimatePresence, motion, stagger } from "framer-motion";
import {
  menuVariant,
  navListContainer,
  navlistAnimate,
} from "../contants/framervariants";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [showNav]);

  return (
    <>
      <nav className=" flex flex-row items-center gap-10 md:flexBetween max-container padding-container relative z-30 py-5">
        <NavLink className="navbar-item" to="/">
          <img src="hilink-logo.svg" alt="logo" width={74} height={29} />
        </NavLink>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              to={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </NavLink>
          ))}
        </ul>

        <div className="flex flex-1 justify-end">
          <Button
            type="button"
            title="Login"
            icon="user.svg"
            variant="btn_dark_green"
          />
        </div>
        {/* 
        <img
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden z-40"
          onClick={() => setshowNav(!showNav)}
        /> */}

        <div
          className="relative w-[32px] h-[25px] z-40 inline-block cursor-pointer lg:hidden"
          onClick={() => setshowNav(!showNav)}
        >
          <motion.div
            animate={
              showNav
                ? { rotate: -45, top: "50%", translateY: "-50%" }
                : { rotate: 0 }
            }
            transition={{ duration: 0.2 }}
            className={`${
              showNav ? "bg-white" : "bg-green-90"
            } w-full h-1 absolute top-0 rounded-md transition duration-500`}
          />
          <motion.div
            animate={showNav ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`${
              showNav ? "bg-white" : "bg-green-90"
            } w-full h-1 absolute top-1/2 -translate-y-1/2 rounded-md`}
          />
          <motion.div
            animate={
              showNav
                ? { rotate: 45, bottom: "50%", translateY: "50%" }
                : { rotate: 0 }
            }
            transition={{ duration: 0.2 }}
            className={`${
              showNav ? "bg-white" : "bg-green-90"
            } w-full h-1 absolute bottom-0 rounded-md transition duration-500`}
          />
        </div>

        <AnimatePresence>
          {showNav && (
            <motion.div
              variants={menuVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-10 lg:hidden bg-green-50 fixed right-0 top-0 w-full h-full flex justify-end  overflow-hidden rounded-bl-full"
            >
              <div className="flex flex-1 max-h-screen max-w-[100vw] justify-center items-center">
                <motion.ul
                  variants={navListContainer}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className=" flex flex-col justify-center gap-[7%] h-full flex-1 items-center"
                >
                  {showNav &&
                    NAV_LINKS.map((link) => (
                      <motion.li
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                        variants={navlistAnimate}
                        className="text-white relative group flex items-center justify-center"
                        key={link.key}
                        onClick={() => setshowNav(!showNav)}
                      >
                        <NavLink
                          to={link.href}
                          className="text-3xl font-extrabold"
                        >
                          {link.label}
                        </NavLink>
                        <div className=" group-hover:max-w-full w-full absolute -bottom-2 h-1 bg-white max-w-0 transition-all duration-300" />
                      </motion.li>
                    ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
