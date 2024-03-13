import React from "react";
import { NavLink } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../contants";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <NavLink to="/" className="mb-10">
            <img src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </NavLink>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((colums) => (
              <div
                className="flex flex-col gap-5 max-sm:flex-1"
                key={colums.title}
              >
                <h4 className="bold-18 whitespace-nowrap">{colums.title}</h4>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {colums.links.map((link) => (
                    <NavLink to="/" key={link}>
                      {link}
                    </NavLink>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">
                  {FOOTER_CONTACT_INFO.title}
                </h4>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <NavLink
                    to="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="whitespace-nowrap medium-14 text-blue-70">
                      {link.value}
                    </p>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h4 className="bold-18 whitespace-nowrap">{SOCIALS.title}</h4>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <NavLink to="/" key={link}>
                      <img src={link} alt="logo" width={24} height={24} />
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Hilink || All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
