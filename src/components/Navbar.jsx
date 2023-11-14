import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu  } from "react-icons/gi";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About us",
    },
    {
      path: "/payments",
      display: "Payments",
    },
    {
      path: "/testimonial",
      display: "Testimonial",
    },
    {
      path: "/samples",
      display: "Samples",
    },
    {
      path: "/payments",
      display: "Payments",
    },
    {
      path: "/estimationfee",
      display: "Estimation Fee",
    },
    {
      path: "/contact",
      display: "Contact us",
    },
  ];

  const menuRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (

    <>
      <div className="navbar bg-navbarColor flex items-center justify-around">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navigation hidden lg:flex" ref={menuRef} onClick={toggleMenu}>
          <ul className="flex menu">
            {navItems.map((item, index) => {
              return (
                <li key={index} className="mx-3 font-[700]">
                  <NavLink to={item.path}>{item.display}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <button className="bg-secondaryColor rounded-[14px] p-3 font-[600]">Get Estimate</button>
        <GiHamburgerMenu onClick={toggleMenu} className="lg:hidden w-6 h-6" />
      </div>
    </>
  );
};

export default Navbar;
