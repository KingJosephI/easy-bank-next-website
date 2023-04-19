"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const displayMobileMenu = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
    if (windowSize >= 480) {
      setIsVisible(false);
    }
  }, [windowSize]);
  return (
    <nav
      className={`sticky sm:relative z-10 w-full px-12 bg-white mx-auto flex h-16 items-center justify-between  md:px-24 lg:px-40`}
    >
      <div>
        <Image src={logo} alt="logo" width={139} height={20} />
      </div>
      <ul
        className={`md:flex menu gap-6 h-16 [&>*]:pt-4 ${
          isVisible
            ? "block absolute rounded top-20 right-1/4 text-center [&>li>*]:text-blue bg-white overflow-hidden h-60 w-1/2"
            : "hidden"
        }`}
      >
        <li className="menu__item">
          <Link href="#">Home</Link>
        </li>
        <li className="menu__item">
          <Link href="#">About</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Contact</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Blog</Link>
        </li>
        <li className="menu__item">
          <Link href="#">Careers</Link>
        </li>
      </ul>
      <a
        href="#"
        className="hidden md:block bg-greenGradient font-bold text-white p-3 px-6 rounded-full hover:opacity-70"
      >
        Request Invite
      </a>

      <button
        className="md:hidden hamburger block h-8 cursor-pointer"
        onClick={displayMobileMenu}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
};

export default Navbar;
