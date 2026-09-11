import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile: hamburger on the left */}
        <button
          onClick={() => handleToggleMenu()}
          className="btn btn-ghost btn-square md:hidden"
        >
          {isMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>

        {/* Brand logo */}
        <img src={Logo} alt="Dev Stack" className="h-8 md:h-9" />

        {/* Center: nav links (desktop only) */}
        <ul className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map((link, ind) => (
            <li
              key={ind}
              className="cursor-pointer text-sm text-base-content/80 transition-colors first:text-pink-600 hover:text-pink-600"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="btn btn-ghost btn-xs sm:btn-sm">Sign In</button>
          <button className="btn btn-xs rounded-full border-none bg-brand-gradient px-4 text-white sm:btn-sm sm:px-5">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown links */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-base-300 px-4 py-3 md:hidden">
          {navLinks.map((link, ind) => (
            <li
              key={ind}
              className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-base-content/80 hover:bg-base-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
